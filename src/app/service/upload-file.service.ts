import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UploadFileService {
    constructor(private http: HttpClient) {}

    upload(fileToUpload: any) {
        let input = new FormData();
        input.append("file", fileToUpload);
    
        return this.http.post("/api/uploadFile", input);
    }
}
