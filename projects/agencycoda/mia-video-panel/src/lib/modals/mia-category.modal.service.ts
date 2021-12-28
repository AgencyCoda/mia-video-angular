import { MiaCategory, MiaCategoryService } from '@agencycoda/mia-category-core';
import { MiaQuery } from '@agencycoda/mia-core';
import { MiaField, MiaFormConfig, MiaFormModalComponent, MiaFormModalConfig } from '@agencycoda/mia-form';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class MiaCategoryModalService {

  constructor(
    protected categoryService: MiaCategoryService,
    protected dialog: MatDialog,
  ) { }

  open(category: MiaCategory) {
    let data = new MiaFormModalConfig();
    data.item = category;
    data.service = this.categoryService;
    data.titleNew = 'New Category';
    data.titleEdit = 'Edit Category';

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = [
      { key: 'title', type: MiaField.TYPE_STRING, label: 'Name Category' },
    ];
    config.errorMessages = [
      { key: 'required', message: 'The "%label%" is required.' }
    ];
    data.config = config;
    return this.dialog.open(MiaFormModalComponent, {
      width: '520px',
      panelClass: 'modal-full-width-mobile',
      data: data
    }).afterClosed();
  }
}
