import { Component, OnInit } from '@angular/core';
import { JmxService } from '../jmx.service';
import { OperationId } from '../operationid';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  operations: OperationId[] = [
    {name: 'Mutualfund BAA check', api: 'CustomerMutualFundsApi.inquireBaa', type: 'check'},
    {name: 'Securities risk score check', api: 'AccountsSecuritiesApi.calculateRiskScore', type: 'check'},
    {name: 'Easy Net check', api: 'CustomerServicesRegistrationApi.findByID', type: 'check'},
    {name: 'Easy App check', api: 'ScbEasyApi.getChannelStatus', type: 'check'},
    {name: 'Securities check', api: 'AccountsSecuritiesApi.getOpenAccountStatus', type: 'check'},
    {name: 'AUM check', api: 'AumApi.processDate', type: 'check'},
    {name: 'Captiva', api: 'CaptivaApi.getTicket', type: 'check'},
    {name: 'SMS Sabai Jai', api: 'ServicingAlertsRegistrationApi.getFeeProfileByProductType', type: 'submission'}
  ];

  checkOperations: OperationId[] = [];
  submissionOperations: OperationId[] = [];

  selectedOperations: string[];

  constructor(private jmxService: JmxService) {
    jmxService.getOperations()
      .subscribe(operations => this.selectedOperations = operations);
    this.checkOperations = this.operations.filter(x => x.type === 'check');
    this.submissionOperations = this.operations.filter(x => x.type === 'submission');
  }

  ngOnInit() {
  }

  onNgModelChange(event) {
    console.log(this.selectedOperations);
  }

  save() {
    console.log('save..');
    this.reset();
    this.jmxService.addOperations(this.selectedOperations);
  }

  reset() {
    console.log('reset..');
    this.jmxService.reset().subscribe(it => console.log(it));
  }

  refresh() {
    this.jmxService.getOperations()
      .subscribe(operations => this.selectedOperations = operations);
  }

}
