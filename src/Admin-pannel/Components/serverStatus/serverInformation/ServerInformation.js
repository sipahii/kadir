import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
function ServerInformation() {
  return (
    <>
      <div className="card">
        {/* <div className="card-header">
          <h3 className="h6 mb-0">Server information</h3>
        </div> */}
        <div className="card-body">
          <table className="table table-striped aiz-table footable footable-1 breakpoint breakpoint-lg" style={{}}>
            <thead>
              <tr className="footable-header">
                <th className="footable-first-visible" style={{ width:"50%" }}>Name</th>
                <th data-breakpoints="lg" >Current Version</th>
                <th data-breakpoints="lg" >Required Version</th>
                <th className="footable-last-visible" >Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td className="footable-first-visible" style={{ display: 'table-cell' }}>
                  <span className="footable-toggle fooicon fooicon-plus" />Php versions</td> */}

                <td style={{ display: 'none' }}>7.4.33</td>
                <td style={{ display: 'none' }}>7.3 or 7.4</td>
                <td className="footable-last-visible" style={{ display: 'table-cell' }}>
                  <i className="las la-check text-success" />
                </td>
              </tr>
              <tr>
                <td className="footable-first-visible" style={{ display: 'table-cell' }}>
                  <span className="footable-toggle fooicon fooicon-plus" />MySQL</td>
                <td style={{ display: 'none' }}>
                  5.7.39
                </td>
                <td style={{ display: 'none' }}>5.6+</td>
                <td className="footable-last-visible" style={{ display: 'table-cell' }}>
                  <i className="las la-check text-success" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Accordion defaultActiveKey="0">
        <Card>
          <div className="card-header">
            <h3 className="h6 mb-0">Server information</h3>
          </div>
          <Card.Header>
            <CustomToggle eventKey="0">
              sds
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <tr className="footable-header">
                <th className="footable-first-visible" style={{ display: 'table-cell' }}>Name</th>
                <th data-breakpoints="lg" style={{ display: 'none' }}>Current Version</th>
                <th data-breakpoints="lg" style={{ display: 'none' }}>Required Version</th>
                <th className="footable-last-visible" style={{ display: 'table-cell' }}>Status</th>
              </tr>
              <th data-breakpoints="lg" >Current Version</th>
              <th data-breakpoints="lg" >Required Version</th>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}
export default ServerInformation;