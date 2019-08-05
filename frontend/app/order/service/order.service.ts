import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  public getOrderById(orderId: number): Observable<any> {
    return this.http.get('api/orders/' + orderId);
  }

  public getOrders(page?: string): Observable<any> {
    const params = new HttpParams().set('page', page ? page : '1');
    return this.http.get('/api/orders', {params: params});
  }
}
