exports.get = function(body) {
    var query = '';
    console.log(body);
    switch (body.type) {
        case "Event":
            query = 'DELETE FROM tag."Event" WHERE "Id" = \'' + body.Id + '\';';
            break; 
        case "Register":
            query = 'DELETE FROM tag."Register" WHERE "Id" = \'' + body.Id + '\';';
            console.log(query);
            break;
    
        default:
            break;
    }
    return query;
  }