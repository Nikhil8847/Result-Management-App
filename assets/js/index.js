$("#add_result").submit(function (event) {
  alert("Data inserted successfully");
});

$("#update_result").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};
  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  console.log(data);

  var request = {
    url: `http://localhost:3000/api/results/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data updated successfully");
    document.location.href = `http://localhost:3000/update-result?rollno=${data.rollno}&dob=${data.dateOfBirth}`;
  });
});

$("#search_result").submit(function (event) {
  event.preventDefault();
  var unindexed_array = $(this).serializeArray();
  var data = {};
  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  document.location.href = `http://localhost:3000/student-result?rollno=${data.rollno}&dateOfBirth=${data.dateOfBirth}`;
});

if (
  window.location.pathname == "/dashboard" ||
  window.location.pathname == "/dashboard#"
) {
  $onDelete = $(".table tbody td a.delete");
  $onDelete.click(function () {
    var id = $(this).attr("data_id");
    console.log("rollno : ", id);
    var request = {
      url: `http://localhost:3000/api/results/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted successfully");
        window.location.reload();
      });
    }
  });
}
