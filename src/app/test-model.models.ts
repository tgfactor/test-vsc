export class FirmSummaryViewModel {
  selectButtonText: string;
  displayModal: boolean = false;
  modalHeader: string = '';
  modalText: string = '';
  modalIcon: string = '';
  aliasId?: string;

  constructor() {
    this.selectButtonText = `Select ${this.modalHeader.toUpperCase()}`;
  }
}
