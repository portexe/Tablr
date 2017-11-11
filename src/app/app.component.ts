import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    columns = [
        {
            'visible': 'false',
            'label': null,
            'width': '30',
            'key': 'rowHeaderIndex',
            'delta': false
        },
        {
            'visible': 'true',
            'label': 'Thread ID',
            'width': '87',
            'key': 'ThreadId',
            'delta': false
        },
        {
            'visible': 'true',
            'label': 'Thread Priority',
            'width': '87',
            'key': 'ThreadPriority',
            'delta': false
        },
        {
            'visible': 'true',
            'label': 'Max Cpu Utilization',
            'width': '87',
            'key': 'MaxCpuUtilization',
            'delta': false
        },
        {
            'visible': 'true',
            'label': 'Cpu Utilization',
            'width': '87',
            'key': 'CpuUtilization',
            'delta': false
        },
        {
            'visible': 'true',
            'label': 'Cpu Number',
            'width': '87',
            'key': 'CpuNumber',
            'delta': false
        },
        {
            'visible': 'true',
            'label': 'Thread Name',
            'width': '149',
            'key': 'ThreadName',
            'delta': false
        }
    ];
    rows = [
        {
            'CpuNumber': 2,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 100,
            'ThreadId': 6620,
            'ThreadName': 'python_main_application',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 3,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 6637,
            'ThreadName': 'Sys\/SysThreadStatus0',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 2,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 7180,
            'ThreadName': 'BSS\/TcpServerSend0',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 3,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 7174,
            'ThreadName': 'BSS\/TcpServerSend1',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 3,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 7176,
            'ThreadName': 'BSS\/SimpleTcpClient0',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 1,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 6638,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued0',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 7179,
            'ThreadName': 'BSS\/SimpleTcpClient1',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 2,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 6639,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued1',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 2,
            'ThreadId': 8179,
            'ThreadName': 'BSS\/SimpleTcpClient2',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 1,
            'ThreadId': 6640,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued2',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 1,
            'MaxCpuUtilization': 3,
            'ThreadId': 7375,
            'ThreadName': 'BSS\/SimpleTcpClient3',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 1,
            'MaxCpuUtilization': 1,
            'ThreadId': 6641,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued3',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': -1,
            'ThreadName': 'BSS\/SimpleTcpClient4',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 1,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 6642,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued4',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': -1,
            'ThreadName': 'BSS\/SimpleTcpClient5',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 2,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 6643,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued5',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': -1,
            'ThreadName': 'BSS\/SimpleTcpClient6',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 2,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 6644,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued6',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': -1,
            'ThreadName': 'BSS\/SimpleTcpClient7',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 2,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 6645,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued7',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': -1,
            'ThreadName': 'BSS\/SimpleTcpClient8',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 2,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 6646,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued8',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': -1,
            'ThreadName': 'BSS\/SimpleTcpClient9',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 2,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 6647,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued9',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': -1,
            'ThreadName': 'BSS\/SimpleTcpClient10',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 2,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 6648,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued10',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 0,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': -1,
            'ThreadName': 'BSS\/SimpleTcpClient11',
            'ThreadPriority': 0
        },
        {
            'CpuNumber': 1,
            'CpuUtilization': 0,
            'MaxCpuUtilization': 0,
            'ThreadId': 6649,
            'ThreadName': 'BSS\/TimestampedBitsIfQueued11',
            'ThreadPriority': 0
        }
    ];
}
