$(document).ready(function () {
  Highcharts.ganttChart("container", {
    title: {
      text: "Gantt Chart with Navigation"
    },

    yAxis: {
      uniqueNames: true
    },

    navigator: {
      enabled: true,
      liveRedraw: true,
      series: {
        type: "gantt",
        pointPlacement: 0.5,
        pointPadding: 0.25,
        accessibility: {
          enabled: false
        }
      },
      yAxis: {
        min: 0,
        max: 3,
        reversed: true,
        categories: []
      }
    },

    scrollbar: {
      enabled: true
    },

    rangeSelector: {
      enabled: true,
      selected: 0
    },

    accessibility: {
      point: {
        descriptionFormatter: function (point) {
          var completedValue = point.completed
              ? point.completed.amount || point.completed
              : null,
            completed = completedValue
              ? " Task " +
                Math.round(completedValue * 1000) / 10 +
                "% completed."
              : "";
          return Highcharts.format(
            "{point.yCategory}.{completed} Start {point.x:%Y-%m-%d}, end {point.x2:%Y-%m-%d}.",
            { point, completed }
          );
        }
      },
      series: {
        descriptionFormatter: function (series) {
          return series.name;
        }
      }
    },

    lang: {
      accessibility: {
        axis: {
          xAxisDescriptionPlural:
            "The chart has a two-part X axis showing time in both week numbers and days.",
          yAxisDescriptionPlural:
            "The chart has one Y axis showing task categories."
        }
      }
    },

    series: [
      {
        name: "Project 1",
        data: [
          {
            start: Date.UTC(2021, 9, 15),
            name: "Prototyping",
            milestone: true
          },
          {
            start: Date.UTC(2022, 9, 15),
            name: "Prototyping",
            milestone: true
          },
          {
            start: Date.UTC(2022, 10, 10),
            name: "Prototyping",
            milestone: true
          },
          {
            start: Date.UTC(2022, 10, 23),
            name: "Prototyping",
            milestone: true
          },
          {
            start: Date.UTC(2022, 9, 11),
            name: "Development",
            milestone: true
          },
          {
            start: Date.UTC(2022, 9, 5),
            name: "Development",
            milestone: true
          },
          {
            start: Date.UTC(2022, 9, 15),
            name: "Development",
            milestone: true
          },
          {
            start: Date.UTC(2022, 9, 3),

            name: "Testing",
            milestone: true
          },
          {
            start: Date.UTC(2022, 9, 4),

            name: "Testing",
            milestone: true
          },
          {
            start: Date.UTC(2022, 9, 5),

            name: "Testing",
            milestone: true
          },
          {
            start: Date.UTC(2022, 9, 27),

            name: "Testing",
            milestone: true
          },
          {
            start: Date.UTC(2022, 9, 29),

            name: "Testing",
            milestone: true
          }
        ]
      }
    ]
  });
});
