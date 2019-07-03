import * as React from 'react';

import { Query } from 'react-apollo';
import { ICertificaat } from '../shared/Model';
import { CERTIFICATES_QUERY } from '../shared/Queries';

interface ICertificateProps {
  code: string;
}

class Certificate extends React.Component<ICertificateProps, {}> {
  public render() {
    return (
      <Query query={CERTIFICATES_QUERY}>
        {({ data }: { data: any }) => {
          if (!data || !data.Certificaten) {
            return '';
          }

          const findCertificate = (data.Certificaten as ICertificaat[]).find(
            (certificate) => certificate.Code === this.props.code,
          );

          if (!findCertificate) {
            return '';
          }
          return findCertificate.Naam;
        }}
      </Query>
    );
  }
}

export default Certificate;
