import { MiaModel } from "@agencycoda/mia-core";

export class MiaVideo extends MiaModel {
    id: number = 0;
    title: string = '';
    slug: string = '';
    author: string = '';
    author_url: string = '';
    caption: string = '';
    photo: string = '';
    video: string = '';
    type: number = 0;
    creator_id: number = 0;
    summary: string = '';
    status: number = 0;
    created_at: string = '';
    updated_at: string = '';
    deleted: number = 0;

}