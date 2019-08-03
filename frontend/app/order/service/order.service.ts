import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  public getOrderById(orderId: number): Observable<any> {
    return this.http.get('api/orders/' + orderId);
  }

  public getOrders(): Observable<any> {
    return this.http.get('/api/orders');
  }
}
