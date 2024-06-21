/* eslint-disable no-script-url */
import * as React from 'react';
//import styles from './GcdsComponents.module.scss';
import '@cdssnc/gcds-components-react/gcds.css'
import { IGcdsComponentsProps } from './IGcdsComponentsProps';
import { GcdsButton, GcdsCard, GcdsPagination } from '@cdssnc/gcds-components-react';

const GcdsComponents : React.FunctionComponent<IGcdsComponentsProps> = (props) => {
  
  return (
      <section>

        <h2>GC DESIGN COMPONENTS</h2>

        <h3> Card</h3>
        <div style={{display: 'grid', gridTemplateColumns: '32% 32% 32%', columnGap: '2%'}}>
          <div>
          <GcdsCard
            cardTitle="Card title link"
            href="#"
            tag="Tag"
            description="Description or supporting text relating to the headline. Longer text will be truncated with ..."
          >
            <div slot="footer">footer information</div>
          </GcdsCard>
          </div>

          <div>

          <GcdsCard
            cardTitle="Card 2"
            href="#"
            tag="Tag"
            description="Description or supporting text relating to the headline. Longer text will be truncated with ..."
          >
            <div slot="footer">footer information</div>
          </GcdsCard>
          </div>
        </div>

        <h3>Pagination</h3>
        <GcdsPagination
          label="Pagination"
          currentPage={9}
          totalPages={15}
          previousHref={'#previous'}
          nextLabel={'javascript:void(0)'}
          nextHref={'www.google.ca'}
          display={'list'}
          lang={'en'}
        />

        <h3>Buttons</h3>
        <div style={{display: 'grid', gridTemplateColumns: '32% 32% 32%', columnGap: '2%'}}>
          <div style={{marginBottom: '10px'}}>
            <GcdsButton
              buttonId={'1'}
              buttonRole={'primary'}
            >
              Primary Button label
            </GcdsButton>
          </div>
          <div style={{marginBottom: '10px'}}> 
            <GcdsButton
              buttonId={'2'}
              buttonRole={'secondary'}
            >
              Secondary Button label
            </GcdsButton>
          </div>
          <div style={{marginBottom: '10px'}}>
            <GcdsButton
              buttonId={'3'}
              buttonRole={'danger'}
            >
              Danger Button label
            </GcdsButton>
          </div>
        </div>


      </section>
    
  );
}

export default GcdsComponents;