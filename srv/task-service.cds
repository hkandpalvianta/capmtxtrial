using { io.capmtxtrial as db } from '../db/schema';

/**
 * TaskService — exposed at /task
 * Service-level auth only; RBAC can be re-added once multitenancy is validated.
 */
@path: '/task'
@requires: 'authenticated-user'
service TaskService {
  entity Tasks as projection on db.Tasks;
}
