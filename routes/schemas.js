var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

// -- Project Schema
var projectSchema = new Schema();
projectSchema.add({
    // _id: false, to remove _id for sub-documents
    client_id: String,
    assignment_start_date: Object,
    assignment_end_date: Object,
    project_group: String,
    project_id: String,
    project_name: String,
    status_in_project: String,
    team_group: String,
    team_name: String,
    allocation: String,
    manager_1_id: String,
    manager_2_id: String,
    manager_1_name: String,
    manager_2_name: String,
    project_country: String,
    project_location: String
});

// -- Resource Schema
var resourceSchema = new Schema();
resourceSchema.add({
    sap_id: Number,
    firstName: String,
    lastName: String,
    gender: String,
    address: String,
    country: String,
    location: String,
    state: String,
    email: String,
    date_of_birth: Object,
    date_of_joining: Object,
    contact: String,
    role: String,
    Designation: String,
    city: String,
    status: String,
    seat_no: String,
    transport_avail: String,
    vnet: String,
    projects: [projectSchema],
    total_alloc: String,
    record_status: String,
    user_access: String,
})


var release = {
    relName: String
}

var tasks = new Schema();
tasks.add({
    phase: String,
    task_des: String,
    planned_start_date: Object,
    planned_end_date: Object,
    actual_start_date: Object,
    actual_end_date: Object,
    BAC: { type: Number, default: 0 },
    release: Schema.Types.ObjectId,
    PV: { type: Number, default: 0 },
    EV: { type: Number, default: 0 },
    EAC: { type: Number, default: 0 },
    ETC: { type: Number, default: 0 },
    AC: { type: Number, default: 0 },
    task_planned: { type: Number, default: 0 },
    review_planned: { type: Number, default: 0 },
    rework_planned: { type: Number, default: 0 },
    SPE: { type: Number, default: 0 },
    PME: { type: Number, default: 0 },
    conf_management: { type: Number, default: 0 },
    QA: { type: Number, default: 0 },
    defect_prevention: { type: Number, default: 0 },
    training: { type: Number, default: 0 },
    defects_received: { type: Number, default: 0 },
    defects_delivered: { type: Number, default: 0 },
    ATD: { type: Number, default: 0 }
})

// export schemas
var db_schemas = {
    project: projectSchema,
    resource: resourceSchema,
    release: release,
    tasks: tasks
}


module.exports = db_schemas;