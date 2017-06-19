<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Author</th>
                  <th>ISBN (ISBN13 & ISBN10)</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <?php
                //$str = $_POST['variable'];  //Get value... it returned error
                if (isset($_POST['submit'])) {
                  $Bval = $_POST['bookSearch'];
                  if ($Bval === "name") {
                    $BkSearch = "title:";
                  } elseif ($Bval === "author") {
                    $BkSearch = "author:";
                  } elseif ($Bval === "isbn") {
                    $BkSearch = "ISBN:";
                  }
                  $Tval = $_POST['Tbox'];
                }
                $str = $BkSearch.$Tval;
                $url = 'https://www.googleapis.com/books/v1/volumes?q='.$str;//Get value replace the "title:java" with the recieved value
                $obj = json_decode(file_get_contents($url), true); //Decodes JSON data
                  foreach ($obj['items'] as $value) {
                    //foreach ($value['volumeInfo'] as &$value2) {
                    echo"<tr>";
                    echo"<td>".$value['volumeInfo']['title']."</td>";
                    echo"<td>".$value['id']."</td>";
                    echo"<td>";
                    foreach ($value['volumeInfo']['authors'] as $key) {
                      echo $key.", ";
                    }
                    echo "</td>";
                    echo "<td>";
                    // if ($value['volumeInfo']['industryIdentifiers'] == "false") {
                    //   echo "No specified authors";
                    // }
                    //else{
                      foreach ($value['volumeInfo']['industryIdentifiers'] as $key2) {
                        echo $key2['type']." ";
                        echo $key2['identifier'].", ";
                      }
                    //}
                    echo "</td>";
                    if ($value['saleInfo']['saleability']==="FOR_SALE"){
                      echo "<td>"."<a href='".$value['saleInfo']['buyLink']."'>Buy Now</a>"."</td>";
                    }
                    else{
                      echo "<td>Google doesn't have this book for sale</td>";
                    }
                    echo"</tr>";
                  }
                ?>
              
              </tbody>
            </table>
          </div>
          <a href="index.php">Back</a>