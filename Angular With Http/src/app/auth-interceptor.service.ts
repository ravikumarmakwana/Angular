import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Request is on the way!");
    const modifyRequest = req.clone({
      headers: req.headers.append("apiKey", "abc"),
    });
    return next.handle(modifyRequest);
  }
}
