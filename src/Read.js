exports.get = function(body) {
    var query = '';
    switch (body.type) {
        case "Event":
            query = 'SELECT "Id", "Date", "State" FROM tag."Event" ';
            if(body.State){
                query += 'WHERE  "State" = \'' + body.State + '\'';
            }
            query+=";"
            break;
        case "Register":
            query = 'SELECT "Id", name, "time", gender, "eventId", "Team" FROM tag."Register"';
            if(body.gender){
                query += ' WHERE "gender" = \'' + body.gender + '\' AND "eventId" = \'' +body.eventId + '\''
            }
            query += ';';
            break;  
        default:
            break;
    }
    return query;
  }