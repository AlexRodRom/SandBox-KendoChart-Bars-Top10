import { Component } from "@angular/core";
import { SeriesLabelsContentArgs } from "@progress/kendo-angular-charts";

@Component({
  selector: "my-app",
  template: `
    <kendo-chart>
      <kendo-chart-axis-defaults
        [majorGridLines]="majorGridLines"
        [line]="{ color: '#ffada6', width: 3 }"
      >
        <kendo-chart-axis-defaults-labels font="10pt" rotation="auto">
        </kendo-chart-axis-defaults-labels>
      </kendo-chart-axis-defaults>
      <kendo-chart-category-axis>
        <kendo-chart-category-axis-item [categories]="categories">
        </kendo-chart-category-axis-item>
      </kendo-chart-category-axis>
      <kendo-chart-legend position="bottom" orientation="horizontal">
      </kendo-chart-legend>
      <kendo-chart-series>
        <kendo-chart-series-item
          type="bar"
          [data]="[15, 19, -28, 31, -6, 5, -32]"
          color="#b7cff7"
        >
          <kendo-chart-series-item-labels
            [color]="e0faff"
            [content]="labelContent"
          >
          </kendo-chart-series-item-labels>
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  `
})
export class AppComponent {
  public categories: string[] = [
    "Fund A",
    "Fund B",
    "Fund C",
    "Fund D",
    "Fund E",
    "Fund F",
    "Fund G"
  ];
  public majorGridLines = {
    color: "#e0faff",
    visible: true
  };
  private suffix = " %";
  // Notice that to capture 'this', the approach utilizes
  // a lambda function instead of a method
  public labelContent = (e: SeriesLabelsContentArgs): string => {
    return e.value + this.suffix;
  };
}
