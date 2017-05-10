import { OpaqueToken } from '@angular/core';

export let TOKEN_TOASTR = new OpaqueToken('toastr');

export interface IToastr {
    success(message: string, title?: string);
    info(message: string, title?: string);
    warning(message: string, title?: string);
    error(message: string, title?: string);
}