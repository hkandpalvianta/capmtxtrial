using TaskService from '../../srv/task-service';

// ── List Report ────────────────────────────────────────────────────────────────
annotate TaskService.Tasks with @(UI: {
  HeaderInfo         : {
    TypeName      : 'Task',
    TypeNamePlural: 'Tasks',
    Title         : { Value: title },
    Description   : { Value: status }
  },
  PresentationVariant: {
    SortOrder     : [{ $Type: 'Common.SortOrderType', Property: createdAt, Descending: true }],
    Visualizations: ['@UI.LineItem']
  },
  SelectionFields    : [title, status, priority, dueDate],
  LineItem           : [
    { Value: title,       @UI.Importance: #High  },
    { Value: status,      @UI.Importance: #High  },
    { Value: priority,    @UI.Importance: #Medium },
    { Value: dueDate,     @UI.Importance: #Medium },
    { Value: createdAt,   @UI.Importance: #Low   },
    { Value: createdBy,   @UI.Importance: #Low   }
  ]
});

// ── Object Page ────────────────────────────────────────────────────────────────
annotate TaskService.Tasks with @(UI: {
  FieldGroup #General: { Data: [
    { Value: title       },
    { Value: description },
    { Value: status      },
    { Value: priority    },
    { Value: dueDate     }
  ]},
  FieldGroup #Audit: { Data: [
    { Value: createdAt },
    { Value: createdBy },
    { Value: modifiedAt },
    { Value: modifiedBy }
  ]},
  Facets: [
    { $Type: 'UI.ReferenceFacet', Label: 'Task Details', Target: '@UI.FieldGroup#General' },
    { $Type: 'UI.ReferenceFacet', Label: 'Audit Info',   Target: '@UI.FieldGroup#Audit'   }
  ]
});

// Value helps are derived automatically from the TaskStatus / TaskPriority enum types.
