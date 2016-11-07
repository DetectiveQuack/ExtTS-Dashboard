module Dashboard.carousel {
    export class Carousel extends Ext.panel.Panel {
        alias = 'widget.TsDashboardCarousel';

        requires = [
            'Dashboard.carousel.widgetContainer.WidgetContainer'
        ];

        layout = 'fit';

        items = [{
            xtype:'TsDashboardCarouselWidgetContainer'
        }]
    }
}