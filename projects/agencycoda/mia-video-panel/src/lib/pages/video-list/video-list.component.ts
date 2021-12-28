import { MiaCategory, MiaCategoryService } from '@agencycoda/mia-category-core';
import { MiaQuery, nil } from '@agencycoda/mia-core';
import { MiaField, MiaFormConfig, SwitchFieldComponent } from '@agencycoda/mia-form';
import { MiaPageCrudComponent, MiaPageCrudConfig } from '@agencycoda/mia-layout';
import { MiaColumn } from '@agencycoda/mia-table';
import { MiaVideo, MiaVideoService } from '@agencycoda/mia-video-core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MiaCategoryModalService } from '../../modals/mia-category.modal.service';

@Component({
  selector: 'mia-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @ViewChild('pageComp') pageComp!: MiaPageCrudComponent;

  config = new MiaPageCrudConfig();

  constructor(
    protected videoService: MiaVideoService,
    protected categoryModal: MiaCategoryModalService,
    protected categoryService: MiaCategoryService,
    protected navigator: Router
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onSearch(text: string) {
    this.config.tableConfig.query.resetWhere();
    if(text.length > 2){
      this.config.tableConfig.query.addWhereLikes(['firstname', 'lastname'], text);
    }
    console.log(this.pageComp);
    this.pageComp.loadItems();
  }

  onAction(action: {key: string; item: any;}) {
    if(action.key == 'add'){
      this.pageComp.openForm(new MiaVideo()).pipe(nil()).subscribe(result => this.pageComp.loadItems());
    } else if (action.key == 'search') {
      this.onSearch(action.item);
    } else if(action.key == 'edit'){
      this.pageComp.openForm(action.item).pipe(nil()).subscribe(result => this.pageComp.loadItems());
    } else if(action.key == 'remove'){
      this.pageComp.onClickRemove(action.item);
    } else if(action.key == 'see'){
      this.navigator.navigateByUrl('/team/profile/' + action.item.id);
    }
  }

  loadTableConfig() {
    this.config.tableConfig.query.addWith('user');
    this.config.tableConfig.query.addWith('categories');

    this.config.tableConfig.loadingColor = 'black';
    this.config.tableConfig.hasEmptyScreen = false;
    this.config.tableConfig.service = this.videoService;
    this.config.tableConfig.columns = [
      { key: 'id', type: 'string', title: '#', field_key: 'id' },
      { key: 'photo', type: 'photo', title: 'Photo', field_key: 'photo' },
      { key: 'title', type: 'string', title: 'Title', field_key: 'title' },
      { key: 'category', type: MiaColumn.TYPE_ARRAY, title: 'Categories', extra: { field_array_key: 'categories', field_print_key: 'title' }},
      { key: 'type_extra', type: 'status', title: 'Modality', field_key: 'type_extra', extra: {
        options: [
          { value: 0, title: 'Body Talk' },
          { value: 1, title: 'Free Fall' },
        ]
      } },
      { key: 'user', type: 'user', title: 'Submitted By', extra: { 
        field_firstname: ['user', 'firstname'], field_lastname: ['user', 'lastname']
      } },
      { key: 'visibility', type: 'icon-toggle', title: '', field_key: 'status', extra: {
        key_action: 'click-lock',
        options: [
          { value: 0, color: '#333', icon: 'visibility-off' },
          { value: 1, color: 'blue', icon: 'visibility' },
        ]
      } },
      { key: 'more', type: 'more', title: '', extra: {
        actions: [
          { icon: 'create', title: 'Editar', key: 'edit' },
          { icon: 'delete', title: 'Borrar', key: 'remove' },
        ]
      } }
    ];
  }

  loadFormConfig() {
    let queryCategory = new MiaQuery();
    queryCategory.addWhere('type', 0);

    this.config.formConfig.titleNew = 'New video';
    this.config.formConfig.titleEdit = 'Edit video';
    this.config.formConfig.service = this.videoService;
    this.config.formConfig.config = new MiaFormConfig();
    this.config.formConfig.config.hasSubmit = false;
    this.config.formConfig.config.fields = [
      { key: 'photo', type: MiaField.TYPE_PHOTO_HEADER, label: 'Photo' },
      { key: 'title', type: MiaField.TYPE_STRING, label: 'Title' },
      { key: 'categories', type: MiaField.TYPE_CHIPS_AND_SELECT_SERVICE, label: 'Category', caption: '', extra: { 
        title: 'Categories', 
        service: this.categoryService, 
        field_display: 'title', 
        field_list: 'categories-auto', 
        query: queryCategory,
        can_add: true,
        add_title: 'Add new category',
        add_subject: new Subject<any>().pipe(switchMap(it => this.categoryModal.open(new MiaCategory()))) } 
      },
      //{ key: 'creator_id', type: MiaField.TYPE_SELECT_SERVICE, extra: { service: this.testService, field_display: 'title', query: new MiaQuery() } },
      { key: 'type_extra', type: MiaField.TYPE_SELECT, label: 'Modality', extra: {
        options: [
          { id: 0, title: 'Body Talk' },
          { id: 1, title: 'Free Fall' },
        ]
      }},
      { key: 'caption', type: MiaField.TYPE_STRING, label: 'Description' },
      { key: 'status', type: MiaField.TYPE_CUSTOM, label: 'Show video', extra: { component: SwitchFieldComponent } },
      
    ];
    this.config.formConfig.config.errorMessages = [
      { key: 'required', message: 'The "%label%" is required.' }
    ];
  }

  loadConfig() {
    this.config.title = 'Videos';

    this.config.buttons.push({ key: 'organize', title: 'Organize', icon: 'edit' });
    this.config.buttons.push({ key: 'add', title: 'New video', icon: 'edit' });

    this.loadTableConfig();
    this.loadFormConfig();
  }
}
