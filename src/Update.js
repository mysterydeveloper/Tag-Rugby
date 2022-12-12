exports.get = function(body) {
    var query = '';
    switch (body.type) {
        case "Event":
            query = 'UPDATE tag."Event" SET "Id"=\'' +  body.Id + '\', "Date"=\'' +  body.Date + '\', "State"=\'' +  body.State + '\' WHERE "Id" = \'' + body.Id + '\';';
            break;
        case "Register":
            query = 'UPDATE tag."Register" SET "Id"=\'' +  body.Id + '\', name=\'' +  body.name + '\', "time"=\'' +  body.time + '\', gender=\'' +  body.gender + '\', "eventId"=\'' +  body.eventId + '\', "Team"=\'' +  body.Team + '\' WHERE "Id" = \'' + body.Id + '\';';
            break;
    
        default:
            break;
    }
    return query;
  }