import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputFieldComponent } from '../input-field/input-field.component';
import { MessagesModule } from 'primeng/messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
@NgModule({
  declarations: [InputFieldComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    InputMaskModule,
    MessagesModule,
    ToastModule,
    AvatarModule,
    AvatarGroupModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    InputMaskModule,
    InputFieldComponent,
    MessagesModule,
    ToastModule,
    AvatarModule,
    AvatarGroupModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TemplateModule {}
