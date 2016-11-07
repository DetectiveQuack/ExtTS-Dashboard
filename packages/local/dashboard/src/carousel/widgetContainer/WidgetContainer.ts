module Dashboard.carousel.widgetContainer {
    export class WidgetContainer extends Ext.panel.Panel {
        alias = 'widget.TsDashboardCarouselWidgetContainer';

        layout = {
            type: 'hbox',
            align: 'stretchmax'
        };

        items = [{
            xtype: 'button',
            text: 'hello'
        }]
    }
}