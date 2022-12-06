/*
*         Function Component
*
*/
import React,{useEffect} from 'react';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import "datatables.net-dt/css/jquery.dataTables.min.css"

//For API Requests
import axios from 'axios';

export default function App(){


  useEffect(()=>{
    //initialize datatable -- start
    $(document).ready(function () {

        $("#example").dataTable().fnDestroy(); // first destroy the previous datatable
        $('#example').DataTable(
            {
                pagingType: 'full_numbers',
                // pageLength: 5,
                // processing: true,
                 // serverSide: true,
                 // ajax: {
                 //      url: 'https://jsonplaceholder.typicode.com/todos',
                 //      type: 'get',
                 //        dataSrc: 'responseData'
                 //  },
                  ajax: "https://g4-trucking.com/applynowapi",
                  columns: [
                    {data:"itemno"},
                    {data:"name"},
                    {data:"phone"},
                    {data:"email"},
                    {data:"message"},
                    {data:"trucktype"} ,
                    {data:"trailer"}
                  ],
                  // dom: 'Bfrtip',
                  dom: 'lfBrtip',
                  buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
            }
        );

    });
    // initialize datatable -- end
  });


  return (
    <div className="MainDiv">

          <h3>DataTable </h3>


      <div className="container p-1 ">

          <table id="example" className="table table-hover table-bordered" style={{width:'100%'}}>

          <thead>
                                          <tr>
                                              <th>S.no</th>
                                              <th>Name</th>

                                               <th>Phone</th>
                                              <th>Email</th>

                                              <th>Message</th>
                                              <th>Trucktype</th>
                                              <th>Trailer</th>
                                          </tr>
                                      </thead>
          <tfoot>
                                           <tr>
                                              <th>S.no</th>
                                              <th>Name</th>

                                               <th>Phone</th>
                                              <th>Email</th>

                                              <th>Message</th>
                                              <th>Trucktype</th>
                                              <th>Trailer</th>
                                          </tr>
                                      </tfoot>
        </table>

        </div>
      </div>
  );
}
