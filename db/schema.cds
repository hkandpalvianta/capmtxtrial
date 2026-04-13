namespace io.capmtxtrial;
using { cuid, managed } from '@sap/cds/common';

type TaskStatus   : String(20) enum { Open; InProgress; Done; Cancelled; };
type TaskPriority : String(10) enum { Low; Medium; High; };

/**
 * Tasks entity — core data model for the multi-tenant task manager.
 * Each tenant gets an isolated HANA HDI container via cds-mtxs.
 */
entity Tasks : cuid, managed {
  title       : String(100) @mandatory;
  description : String(500);
  status      : TaskStatus   default 'Open'   @assert.range;
  priority    : TaskPriority default 'Medium' @assert.range;
  dueDate     : Date;
}
