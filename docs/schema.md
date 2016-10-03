# Schema Information

**users**

column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
username | string | not null, indexed, unique
password_digest | string | not null
session_token | string | not null
email | string | not null, indexed
team_id | integer | not null, foreign key, indexed


**teams**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
manager_id | integer | not null, indexed, foreign key
name | string |


**todo_lists**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
title | string | not null
description | string |
archived | boolean | default: false
author_id | integer| foreign key, not null, indexed

**todos**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
title | string | not null
description | string |
completion | boolean | default: false
duedate | datetime
author_id | integer | not null, foreign key, indexed
todoer_id | integer | not null, foreign key, indexed
todo_list_id | integer | not null, foreign key, indexed


**events**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
title | string | not null
description | string |
event_date | datetime | not null, indexed
author_id | integer | not null, foreign key, indexed


**messages**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
title | string | not null
body | text |
author_id | integer | not null, foreign key, indexed
respond_to_id | integer | not null, foreign key, indexed







////////////////////////////////////////////////////////////
// I may have to leave the projects feature a later upgrade.


**projects**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
author_id | integer | not null, indexed, foreign key
title | string | not null
description | text


**project_memberships**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
member_id | integer | not null, indexed, foreign key
project_id | integer | not null, indexed, foreign key
