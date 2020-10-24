import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { AppComponent } from './app.component';

describe('AppComponent', () =>
{
  let spectator: Spectator<AppComponent>;
  const factory = createComponentFactory({
    component: AppComponent
  });

  beforeEach(() =>
  {
    spectator = factory();
  });

  it('should create the app', () =>
  {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });
});
