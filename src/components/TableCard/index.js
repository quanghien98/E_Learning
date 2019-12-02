import React from "react";
import { Card, CardTitle, CardBody, Table } from "reactstrap";
import ListPagination from "../ListPagination";
// import { requestCourseDetails } from "../../actions/course/courseActions";

const TableCard = props => {
  const {
    tableTitle,
    paginate,
    totalItems,
    currentPage,
    itemsPerPage,
    rows,
    headings,
    optionalDes,
    requestCourseDetails
  } = props;
  return (
    <Card className="list__wrapper">
      <CardTitle className="wrapper__title">{tableTitle}</CardTitle>
      <CardBody className="wrapper__body">
        {optionalDes ? <h5>{optionalDes}</h5> : undefined}

        <Table className="list__table" hover bordered responsive>
          <thead>
            <tr>
              {headings === undefined ? (
                <></>
              ) : (
                headings.map(heading => {
                  return <th key={heading}>{heading}</th>;
                })
              )}
            </tr>
          </thead>
          <tbody>
            {rows === undefined ? (
              <></>
            ) : (
              rows.map(item => {
                return (
                  <tr
                    key={item.col1}
                    onClick={() => requestCourseDetails(item.col1)}
                  >
                    <td>{item.col1}</td>
                    <td>{item.col2}</td>
                    <td>{item.col3}</td>
                    <td>{item.col4}</td>
                    <td>{item.col5}</td>
                    <td>{item.col6}</td>
                    <td>{item.col7}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </CardBody>
      {paginate === undefined ? (
        undefined
      ) : (
        <ListPagination
          paginate={paginate}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
        />
      )}
    </Card>
    // NOTE: since pagination is optional, it returns undefined as paginate is not passed from parent component(s)
  );
};
export default TableCard;
