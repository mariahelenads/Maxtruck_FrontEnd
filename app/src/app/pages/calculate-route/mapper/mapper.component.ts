import { Component, Input, OnInit } from '@angular/core';
import { enviromnet } from '../../../enviroments/enviroment.prod';
import H from '@here/maps-api-for-javascript';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-mapper',
  templateUrl: './mapper.component.html',
  standalone: true,
  styleUrls: ['./mapper.component.scss'],
})
export class MapperComponent implements OnInit {
  @Input() calcRouter = new Subject()
  platform!: H.service.Platform;
  defaultLayers!: any;
  map!: H.Map;
  mapEvents!: H.mapevents.MapEvents;
  behavior!: H.mapevents.Behavior;
  ui!: H.ui.UI;

  constructor() {}

  ngOnInit() {
    this.initMapper();
    this.calcRouter.subscribe(v=>console.log('passou',v))
  }
  
  initMapper() {
    // Inicializar a plataforma HERE
     this.platform = new H.service.Platform({
      apikey: enviromnet.apikey, // Substitua pela sua chave de API
    });

    // Definir as opções do mapa
     this.defaultLayers = this.platform.createDefaultLayers() as any;
    // Inicializar o mapa
     this.map = new H.Map(
      document.getElementById('mapContainer') as HTMLElement, // ID do container do mapa
      this.defaultLayers.vector.normal.map, // Camada padrão do mapa
      {
        zoom: 12, // Nível de zoom inicial
        center: { lat: -23.5505, lng: -46.6333 }, // Localização inicial (São Paulo)
      }
    );
    // Ati this.interações no mapa (zoom, arrastar)
     this.mapEvents = new H.mapevents.MapEvents(this.map);
     this.behavior = new H.mapevents.Behavior(this.mapEvents);

    // Adicionar controles ao mapa
     this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers);


  
  }

  // Função para geocodificar endereços em coordenadas
  async geocodeAddress(address : string) {
  const response = await fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(address)}&apiKey=KzJwxn4fXhBgG3pKHuSjVILKqqQBa6dqldJ683xYKpo`);
  const data = await response.json();
  if (data.items && data.items.length > 0) {
      return {
          lat: data.items[0].position.lat,
          lng: data.items[0].position.lng
      };
  } else {
      throw new Error('Endereço não encontrado: ' + address);
  }
}

// Função para calcular a rota
async calculateRoute() {
  try {
      var originAddress = "";
      var destinationAddress = "";
      var height = "";
      var grossWeight = "";

      // Geocodificar endereços
      const origin = await this.geocodeAddress(originAddress);
      const destination = await this.geocodeAddress(destinationAddress);

      // Configurar parâmetros da rota
      const routingParameters = {
          'origin': `${origin.lat},${origin.lng}`,
          'destination': `${destination.lat},${destination.lng}`,
          'return': 'polyline',
          'spans': 'notices',
          'transportMode': 'truck',
          'vehicle[grossWeight]': String(grossWeight ? parseInt(grossWeight) : 12000),
          'vehicle[height]': String(height ? parseInt(height) * 100 : 400),
          'departureTime': '2021-11-01T10:00:00',
          'apiKey': 'KzJwxn4fXhBgG3pKHuSjVILKqqQBa6dqldJ683xYKpo'
      };

      // Fazer a solicitação para a API de rotas HERE
      const queryString = new URLSearchParams(routingParameters).toString();
      const routeResponse = await fetch(`https://router.hereapi.com/v8/routes?${queryString}`);
      const routeData = await routeResponse.json();

      if (routeData.routes && routeData.routes.length > 0) {
          const route = routeData.routes[0];
          const routeShape = route.sections[0].polyline;
          const linestring = H.geo.LineString.fromFlexiblePolyline(routeShape);

          // Remover rota anterior, se houver
          this.map.getObjects().forEach((object) =>{
              if (object instanceof H.map.Polyline) {
                  this.map.removeObject(object);
              }
          });

          // Criar a linha que vai representar a rota
          const routeLine = new H.map.Polyline(linestring, {
              style: { strokeColor: 'blue', lineWidth: 4 }, data : {}
          });

          // Adicionar a rota no mapa
          this.map.addObject(routeLine);

          // Ajustar o mapa para mostrar a rota completa
          this.map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox()  as H.geo.AbstractGeometry});
      } else {
          alert('Nenhuma rota encontrada.');
      }
  } catch (error : any) {
      console.error('Erro ao calcular a rota:', error);
      alert('Erro ao calcular a rota: ' + error.message);
  }
}
}
