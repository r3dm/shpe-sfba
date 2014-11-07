'use strict';

var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Officer = new keystone.List('Officer', { defaultSort: 'priority' });
Officer.defaultColumns = 'name, priority';

Officer.add({
  name:     { type: Types.Name, required: true, initial: true },
  role:     { type: Types.Text },
  bio:      { type: Types.Textarea },
  photo:    { type: Types.CloudinaryImage },
  email:    { type: Types.Email },
  priority: { type: Types.Number, sortable: true }
});

Officer.register();
