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

var tasks = {
        phase: String,
        task_des: String,
        planned_start_date: Object,
        planned_end_date: Object,
        actual_start_date: Object,
        actual_end_date: Object,
        BAC: Number,
        release: Schema.Types.ObjectId,
        ATD: Number,
        PV: Number,
        EV: Number,
        EAC: Number,
        ETC: Number,
        AC: Number,
        task_planned: Number,
        review_planned: Number,
        rework_planned: Number,
        SPE: Number,
        PME: Number,
        conf_management: Number,
        QA: Number,
        defect_prevention: Number,
        training: Number,
        defects_received: Number,
        defects_delivered: Number
    }
    // export schemas
var db_schemas = {
    project: projectSchema,
    resource: resourceSchema,
    release: release,
    tasks: tasks
}


module.exports = db_schemas;