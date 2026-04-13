using TaskService from '../../srv/task-service';

// ── Field labels ───────────────────────────────────────────────────────────────
annotate TaskService.Tasks with {
  ID          @title: '{i18n>Tasks_ID}';
  title       @title: '{i18n>Tasks_title}';
  description @title: '{i18n>Tasks_description}';
  status      @title: '{i18n>Tasks_status}';
  priority    @title: '{i18n>Tasks_priority}';
  dueDate     @title: '{i18n>Tasks_dueDate}';
  createdAt   @title: '{i18n>Tasks_createdAt}';
  createdBy   @title: '{i18n>Tasks_createdBy}';
  modifiedAt  @title: '{i18n>Tasks_modifiedAt}';
  modifiedBy  @title: '{i18n>Tasks_modifiedBy}';
}

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
