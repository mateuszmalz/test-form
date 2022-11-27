import { BehaviorSubject, distinctUntilChanged, Observable, Subscription } from 'rxjs';

export abstract class Datasource<T> {

  private readonly data = new BehaviorSubject<T | null>(null);
  private readonly loading = new BehaviorSubject<boolean>(false);
  private readonly loaded = new BehaviorSubject<boolean>(false);

  readonly data$: Observable<T | null> = this.data.pipe(distinctUntilChanged());
  readonly loading$: Observable<boolean> = this.loading.pipe(distinctUntilChanged());
  readonly loaded$: Observable<boolean> = this.loaded.pipe(distinctUntilChanged());

  private sub: Subscription = Subscription.EMPTY;

}
