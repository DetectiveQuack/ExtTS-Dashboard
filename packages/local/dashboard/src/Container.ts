module Dashboard {
    export class Container extends Ext.panel.Panel {
        alias: String = 'widget.TsDashboard';

        requires: String<Array> = [
            'Dashboard.carousel.Carousel'
        ];

        layout: 'fit';

        bbar: Object<Array> = [{
            xtype: 'TsDashboardCarousel'
        }];
    }
}