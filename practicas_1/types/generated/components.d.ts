import type { Schema, Struct } from '@strapi/strapi';

export interface SharedClassDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_class_details';
  info: {
    displayName: 'class-details';
  };
  attributes: {
    clase: Schema.Attribute.String;
    horario: Schema.Attribute.Enumeration<
      ['morning, ', 'afternoon,', ' night']
    >;
  };
}

export interface SharedEventDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_details';
  info: {
    displayName: 'event-details';
  };
  attributes: {
    fecha: Schema.Attribute.Date;
    hora: Schema.Attribute.Time;
    is_virtual: Schema.Attribute.Boolean;
    lugar: Schema.Attribute.String;
  };
}

export interface SharedMaterial extends Struct.ComponentSchema {
  collectionName: 'components_shared_materials';
  info: {
    displayName: 'material';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['video,', 'document', ' link', ' audio']
    >;
    url: Schema.Attribute.String;
  };
}

export interface SharedProfesorDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_profesor_details';
  info: {
    displayName: 'profesor-detail';
  };
  attributes: {
    especialidad: Schema.Attribute.String;
    experiencia: Schema.Attribute.Integer;
  };
}

export interface SharedSubtopic extends Struct.ComponentSchema {
  collectionName: 'components_shared_subtopics';
  info: {
    displayName: 'subtopic';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedTopic extends Struct.ComponentSchema {
  collectionName: 'components_shared_topics';
  info: {
    displayName: 'topic';
  };
  attributes: {
    subtopics: Schema.Attribute.Component<'shared.subtopic', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.class-details': SharedClassDetails;
      'shared.event-details': SharedEventDetails;
      'shared.material': SharedMaterial;
      'shared.profesor-detail': SharedProfesorDetail;
      'shared.subtopic': SharedSubtopic;
      'shared.topic': SharedTopic;
    }
  }
}
