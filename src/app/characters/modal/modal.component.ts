import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iOrigin } from '../../models/iOrigin';
import { OriginsService } from '../../services/origins.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  @Input() id: number | null = 0 || null;
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  origin: iOrigin = {
    id: 0,
    name: '',
    type: '',
    dimension: '',
  };

  constructor(private _originS: OriginsService) {}

  ngOnInit(): void {
    this._originS.getSingleLocation(this.id || 0).subscribe({
      next: (response) => {
        this.origin = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onClose() {
    this.cancel.emit();
  }

  onAddFavorites(id: number) {
    this.confirm.emit();
  }
}
