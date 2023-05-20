from bs4 import BeautifulSoup
import csv

html = '''
<table style="border-spacing: 0px;padding: 4px;border-width: 0px;">
<tbody><tr><td style="text-align: left;">Albuminized Orange,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_46" class="pginternal">46</a></td></tr>
<tr><td style="text-align: left;">Almonds, Salted,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Salted_Almonds" class="pginternal">44</a></td></tr>
<tr><td style="text-align: left;">Angel Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Angel_Cake" class="pginternal">10-11</a></td></tr>
<tr><td style="text-align: left;">Apple Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Apple_Cake" class="pginternal">22</a></td></tr>
<tr><td style="text-align: left;">Apple Dressing,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#APPLE_DRESSING" class="pginternal">35</a></td></tr>
<tr><td style="text-align: left;">Apple Dumplings,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Apple_Dumplings" class="pginternal">22</a></td></tr>
<tr><td style="text-align: left;">Apple Fritters,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Apple_Fritters" class="pginternal">9</a></td></tr>
<tr><td style="text-align: left;">Apple Pie,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Apple_Pie" class="pginternal">26</a></td></tr>
<tr><td style="text-align: left;">Apple Roll,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_23" class="pginternal">23</a></td></tr>
<tr><td style="text-align: left;">Apple Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Apple_Sauce" class="pginternal">33</a></td></tr>
<tr><td style="text-align: left;">Asparagus,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Asparagus" class="pginternal">39</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Asparagus48" class="pginternal">48</a></td></tr>
<tr><td style="text-align: left;">Banana Cake with Jelly Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Banana_Cake" class="pginternal">23</a></td></tr>
<tr><td style="text-align: left;">Banana Fritters,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_10" class="pginternal">10</a></td></tr>
<tr><td style="text-align: left;">Barley Water,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Invalid_Cookery" class="pginternal">45</a></td></tr>
<tr><td style="text-align: left;">Beans,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Boston_Beans" class="pginternal">38</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Vegetables" class="pginternal">39</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Lima_Beans" class="pginternal">40</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Beans" class="pginternal">48</a></td></tr>
<tr><td style="text-align: left;">Bean Soup,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Bean_Soup" class="pginternal">29</a></td></tr>
<tr><td style="text-align: left;">Bechamel Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Bechamel_Sauce" class="pginternal">35</a></td></tr>
<tr><td style="text-align: left;">Beef,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Pot_Roasting" class="pginternal">32</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Pot_Roast_of_Beef" class="pginternal">33</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Page_46" class="pginternal">46</a></td></tr>
<tr><td style="text-align: left;">Beef Tea,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_46" class="pginternal">46</a></td></tr>
<tr><td style="text-align: left;">Beets,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Vegetables" class="pginternal">39</a></td></tr>
<tr><td style="text-align: left;">Berries, Canned,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_48" class="pginternal">48</a></td></tr>
<tr><td style="text-align: left;">Berry Pies,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Berry_Pies" class="pginternal">27</a></td></tr>
<tr><td style="text-align: left;">Beverages,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Beverages" class="pginternal">42</a></td></tr>
<tr><td style="text-align: left;">Biscuits and Muffins,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Biscuits_and_Muffins" class="pginternal">6-7</a></td></tr>
<tr><td style="text-align: left;">Blueberry Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Blueberry_Cake" class="pginternal">23</a></td></tr>
<tr><td style="text-align: left;">Blueberry or Huckleberry Float,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Blueberry_Float" class="pginternal">24</a></td></tr>
<tr><td style="text-align: left;">Blueberry or Huckleberry Muffins,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#berry_Muffins" class="pginternal">7</a></td></tr>
<tr><td style="text-align: left;">Boiling and Stewing (Meats),</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_32" class="pginternal">32</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Boiled_Meats" class="pginternal">45</a></td></tr>
<tr><td style="text-align: left;">Boston Baked Beans,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Boston_Beans" class="pginternal">38</a></td></tr>
<tr><td style="text-align: left;">Boston Brown Bread,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Boston_Brown" class="pginternal">3</a></td></tr>
<tr><td style="text-align: left;">Boston Cream Pie,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Charlotte_Russe" class="pginternal">23</a></td></tr>
<tr><td style="text-align: left;">Bran Biscuits,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Bran_Biscuits" class="pginternal">6</a></td></tr>
<tr><td style="text-align: left;">Bread and Rolls,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Bread_and_Rolls" class="pginternal">3-4-5</a></td></tr>
<tr><td style="text-align: left;">Bride's Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Brides_Cake" class="pginternal">11</a></td></tr>
<tr><td style="text-align: left;">Broiling and Frying,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Meats" class="pginternal">32</a></td></tr>
<tr><td style="text-align: left;">Brussels Sprouts,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Potato_Cakes" class="pginternal">40</a></td></tr>
<tr><td style="text-align: left;">Buckwheat Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Buckwheat_Cakes" class="pginternal">8</a></td></tr>
<tr><td style="text-align: left;">Buns,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cinnamon_Buns" class="pginternal">5</a></td></tr>
<tr><td style="text-align: left;">Butter Scotch,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Butter_Scotch" class="pginternal">43</a></td></tr>
<tr><td style="text-align: left;">Butter Scotch Icing and Filling,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Butter_Scotch_Icing" class="pginternal">18</a></td></tr>
<tr><td style="text-align: left;">Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cake" class="pginternal">10-16</a></td></tr>
<tr><td style="text-align: left;">Candies,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Candies" class="pginternal">43-44</a></td></tr>
<tr><td style="text-align: left;">Canning and Preserving,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Preserving_and_Canning" class="pginternal">46-49</a></td></tr>
<tr><td style="text-align: left;">Caramels, Chocolate,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Choc_Cara" class="pginternal">43</a></td></tr>
<tr><td style="text-align: left;">Caramel Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Caramel_Sauce" class="pginternal">26</a></td></tr>
<tr><td style="text-align: left;">Carrots,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Carrots" class="pginternal">39</a></td></tr>
<tr><td style="text-align: left;">Cauliflower,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cauliflower" class="pginternal">40</a></td></tr>
<tr><td style="text-align: left;">Cereals (Fireless Cookery),</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cereals" class="pginternal">45</a></td></tr>
<tr><td style="text-align: left;">Charlotte Russe,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Charlotte_Russe" class="pginternal">23</a></td></tr>
<tr><td style="text-align: left;">Cheese Biscuits,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Bran_Biscuits" class="pginternal">6</a></td></tr>
<tr><td style="text-align: left;">Cheese in Scallop Shells or Ramekins,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cheese_Scallop" class="pginternal">38</a></td></tr>
<tr><td style="text-align: left;">Cheese Souffle,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cheese_Souf" class="pginternal">39</a></td></tr>
<tr><td style="text-align: left;">Cheese Straws,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cheese_Straws" class="pginternal">38</a></td></tr>
<tr><td style="text-align: left;">Cherries, Canned,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_48" class="pginternal">48</a></td></tr>
<tr><td style="text-align: left;">Cherry Tarts,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_28" class="pginternal">28</a></td></tr>
<tr><td style="text-align: left;">Chicken Croquettes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Chicken_Croq" class="pginternal">37</a></td></tr>
<tr><td style="text-align: left;">Chicken Patties,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Chicken_Pat" class="pginternal">38</a></td></tr>
<tr><td style="text-align: left;">Chicken Pie,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Chicken_Pie" class="pginternal">35</a></td></tr>
<tr><td style="text-align: left;">Chicken Salad,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Chicken_Salad" class="pginternal">41</a></td></tr>
<tr><td style="text-align: left;">Chili Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Chili_Sauce" class="pginternal">49</a></td></tr>
<tr><td style="text-align: left;">Chocolate,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_43" class="pginternal">43</a></td></tr>
<tr><td style="text-align: left;">Chocolate Blanc Mange,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_24" class="pginternal">24</a></td></tr>
<tr><td style="text-align: left;">Chocolate Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Chocolate_Cake" class="pginternal">11</a></td></tr>
<tr><td style="text-align: left;">Chocolate Caramels,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Choc_Cara" class="pginternal">43</a></td></tr>
<tr><td style="text-align: left;">Chocolate Filling and Icing,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#CHOCOLATE_FILL" class="pginternal">13</a>-<a href="285609155383144226_38193-h-0.htm.xhtml#Chocolate_Fill16" class="pginternal">16</a>-<a href="285609155383144226_38193-h-0.htm.xhtml#Page_17" class="pginternal">17</a></td></tr>
<tr><td style="text-align: left;">Chocolate Ice Cream,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Choc_Ice" class="pginternal">28</a></td></tr>
<tr><td style="text-align: left;">Chocolate Layer Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Chocolate_Layer" class="pginternal">13</a></td></tr>
<tr><td style="text-align: left;">Chocolate Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Chocolate_Sauce" class="pginternal">25</a></td></tr>
<tr><td style="text-align: left;">Chow Chow,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Chow_Chow" class="pginternal">49</a></td></tr>
<tr><td style="text-align: left;">Christmas Plum Pudding,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Christmas" class="pginternal">24</a></td></tr>
<tr><td style="text-align: left;">Cinnamon Buns,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cinnamon_Buns" class="pginternal">5</a></td></tr>
<tr><td style="text-align: left;">Clam Chowder,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Clam_Chow" class="pginternal">31</a></td></tr>
<tr><td style="text-align: left;">Clam Fritters,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Clam_Frit" class="pginternal">10</a></td></tr>
<tr><td style="text-align: left;">Cocoa,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cocoa" class="pginternal">42</a></td></tr>
<tr><td style="text-align: left;">Cocoa Cookies,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cocoa_Cookies" class="pginternal">19</a></td></tr>
<tr><td style="text-align: left;">Cocoa Cream Candy,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cocoa_Cream" class="pginternal">44</a></td></tr>
<tr><td style="text-align: left;">Cocoa Drop Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cookies_and_Small_Cakes" class="pginternal">18</a></td></tr>
<tr><td style="text-align: left;">Cocoa Icing,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cocoa_Icing" class="pginternal">17</a></td></tr>
<tr><td style="text-align: left;">Cocoa Syrup,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cocoa" class="pginternal">42</a></td></tr>
<tr><td style="text-align: left;">Cocoanut Cake, Feather,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cocoanut_Cake" class="pginternal">13</a></td></tr>
<tr><td style="text-align: left;">Cocoanut Cookies,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cocoanut_Cookies" class="pginternal">19</a></td></tr>
<tr><td style="text-align: left;">Cocoanut Cream Candy,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cocoanut_Cream" class="pginternal">44</a></td></tr>
<tr><td style="text-align: left;">Cocoanut Layer Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cocoanut_Layer" class="pginternal">14</a></td></tr>
<tr><td style="text-align: left;">Codfish Balls,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Codfish_Balls" class="pginternal">30</a></td></tr>
<tr><td style="text-align: left;">Coffee,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Beverages" class="pginternal">42</a></td></tr>
<tr><td style="text-align: left;">Coffee Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Coffee_Cake" class="pginternal">5</a></td></tr>
<tr><td style="text-align: left;">Coffee Fruit Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Coffee_Fruit" class="pginternal">12</a></td></tr>
<tr><td style="text-align: left;">Coffee Spice Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Coffee_Spice" class="pginternal">16</a></td></tr>
<tr><td style="text-align: left;">Cold Slaw,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cold_Slaw" class="pginternal">39</a></td></tr>
<tr><td style="text-align: left;">Conserve, Plum,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Plum" class="pginternal">49</a></td></tr>
<tr><td style="text-align: left;">Cookies and Small Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cookies_and_Small_Cakes" class="pginternal">18-19-20</a></td></tr>
<tr><td style="text-align: left;">Corn and Rice Pone,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Pone" class="pginternal">3</a></td></tr>
<tr><td style="text-align: left;">Corn, Boiled,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Boiled_Corn" class="pginternal">40</a></td></tr>
<tr><td style="text-align: left;">Corn Bread,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Corn_Bread" class="pginternal">3</a></td></tr>
<tr><td style="text-align: left;">Corn, Canned,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Beans" class="pginternal">48</a></td></tr>
<tr><td style="text-align: left;">Corn Fritters,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Corn_Frit" class="pginternal">10</a></td></tr>
<tr><td style="text-align: left;">Corn Gems, Green,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Corn_Gems" class="pginternal">8</a></td></tr>
<tr><td style="text-align: left;">Corn Meal Griddle Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Corn_Griddle" class="pginternal">9</a></td></tr>
<tr><td style="text-align: left;">Corn Meal Muffins,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Corn_Muffins" class="pginternal">7</a></td></tr>
<tr><td style="text-align: left;">Corn Pudding,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Corn_Pud" class="pginternal">39</a></td></tr>
<tr><td style="text-align: left;">Cottage Pudding,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cottage_Pud" class="pginternal">22</a></td></tr>
<tr><td style="text-align: left;">Crabs,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_31" class="pginternal">31</a></td></tr>
<tr><td style="text-align: left;">Cranberry Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cranberry_S" class="pginternal">36</a></td></tr>
<tr><td style="text-align: left;">Cream Filling,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#CREAM_FILLING" class="pginternal">14</a></td></tr>
<tr><td style="text-align: left;">Cream Layer Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cream_Layer" class="pginternal">14</a></td></tr>
<tr><td style="text-align: left;">Cream Loaf Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cream_Loaf" class="pginternal">12</a></td></tr>
<tr><td style="text-align: left;">Cream Puffs,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Cream_Puffs" class="pginternal">24</a></td></tr>
<tr><td style="text-align: left;">Cream Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cream_Sauce" class="pginternal">35</a></td></tr>
<tr><td style="text-align: left;">Cream Soups,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cream_Soups" class="pginternal">29-30</a></td></tr>
<tr><td style="text-align: left;">Creole Soup,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Creole_Soup" class="pginternal">30</a></td></tr>
<tr><td style="text-align: left;">Croquettes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Croquettes" class="pginternal">37</a></td></tr>
<tr><td style="text-align: left;">Crullers,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Crullers" class="pginternal">21</a></td></tr>
<tr><td style="text-align: left;">Currant Jelly Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Currant_Jelly" class="pginternal">36</a></td></tr>
<tr><td style="text-align: left;">Currant Tea Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Currant_Tea" class="pginternal">7</a></td></tr>
<tr><td style="text-align: left;">Currants, Spiced,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Spiced_Currants" class="pginternal">49</a></td></tr>
<tr><td style="text-align: left;">Custard, Baked,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Puddings_and_Other_Desserts" class="pginternal">22</a></td></tr>
<tr><td style="text-align: left;">Custard, Pie,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Custard_Pie" class="pginternal">27</a></td></tr>
<tr><td style="text-align: left;">Date and Peanut Paste,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Date_Peanut" class="pginternal">44</a></td></tr>
<tr><td style="text-align: left;">Date Bread,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Date_Bread" class="pginternal">4</a></td></tr>
<tr><td style="text-align: left;">Date Cake, Royal,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Date_Cake" class="pginternal">12</a></td></tr>
<tr><td style="text-align: left;">Date Muffins,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Date_Muffins" class="pginternal">7</a></td></tr>
<tr><td style="text-align: left;">Dates, Stuffed,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Stuffed_dates" class="pginternal">44</a></td></tr>
<tr><td style="text-align: left;">Desserts, Frozen,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Frozen_Desserts" class="pginternal">28-29</a></td></tr>
<tr><td style="text-align: left;">Devils Food Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Devils" class="pginternal">14</a></td></tr>
<tr><td style="text-align: left;">Doughnuts,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Doughnuts" class="pginternal">21</a></td></tr>
<tr><td style="text-align: left;">Dumplings,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Apple_Dumplings" class="pginternal">22</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Dumplings2" class="pginternal">32</a></td></tr>
<tr><td style="text-align: left;">Eggless, Milkless, Butterless Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Eggless_Milkless" class="pginternal">11</a></td></tr>
<tr><td style="text-align: left;">Eggs,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Eggs" class="pginternal">36-37</a></td></tr>
<tr><td style="text-align: left;">Egg Sauce for Fish,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_36" class="pginternal">36</a></td></tr>
<tr><td style="text-align: left;">Fairmount Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_13" class="pginternal">13</a></td></tr>
<tr><td style="text-align: left;">Fig Envelopes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Fig_Env" class="pginternal">8</a></td></tr>
<tr><td style="text-align: left;">Fig Pudding,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Fig_Pud" class="pginternal">25</a></td></tr>
<tr><td style="text-align: left;">Filled Cookies,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_20" class="pginternal">20</a></td></tr>
<tr><td style="text-align: left;">Fireless Cookery,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Fireless_Cookery" class="pginternal">44</a></td></tr>
<tr><td style="text-align: left;">Fish,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Fish" class="pginternal">30-31</a></td></tr>
<tr><td style="text-align: left;">Fritters,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Fritters" class="pginternal">9-10</a></td></tr>
<tr><td style="text-align: left;">Frosting, Ornamental,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Frosting" class="pginternal">16</a></td></tr>
<tr><td style="text-align: left;">Fruit Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_12" class="pginternal">12</a></td></tr>
<tr><td style="text-align: left;">Fruit Filling,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#FRUIT_FILL" class="pginternal">15</a>-<a href="285609155383144226_38193-h-0.htm.xhtml#FRUIT_FILL17" class="pginternal">17</a></td></tr>
<tr><td style="text-align: left;">Fruit Fritters,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Fruit_Frit" class="pginternal">9</a></td></tr>
<tr><td style="text-align: left;">Fruit Layer Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Fruit_Layer" class="pginternal">15</a></td></tr>
<tr><td style="text-align: left;">Fruit Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Fruit_Sauce" class="pginternal">26</a></td></tr>
<tr><td style="text-align: left;">Fruit Shortcakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Fruit_Shortcakes" class="pginternal">20-21</a></td></tr>
<tr><td style="text-align: left;">Fruits, Canning,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Preserving_and_Canning" class="pginternal">46</a></td></tr>
<tr><td style="text-align: left;">Fudge,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Fudge" class="pginternal">44</a></td></tr>
<tr><td style="text-align: left;">Fudge Squares,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Fudgesq" class="pginternal">20</a></td></tr>
<tr><td style="text-align: left;">Gems,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Gems" class="pginternal">8</a></td></tr>
<tr><td style="text-align: left;">Giblet Gravy,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Giblet_Gravy" class="pginternal">34</a></td></tr>
<tr><td style="text-align: left;">Gluten Muffins,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Gluten_Muffins" class="pginternal">46</a></td></tr>
<tr><td style="text-align: left;">Goose Roast,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Roast_Goose" class="pginternal">35</a></td></tr>
<tr><td style="text-align: left;">Graham Bread,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Graham_Bread" class="pginternal">3</a></td></tr>
<tr><td style="text-align: left;">Graham Gems,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Gems" class="pginternal">8</a></td></tr>
<tr><td style="text-align: left;">Grape Sherbet,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Grape_Sherbet" class="pginternal">28</a></td></tr>
<tr><td style="text-align: left;">Gravy, Brown,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Brown_Sauce" class="pginternal">36</a></td></tr>
<tr><td style="text-align: left;">Griddle Cakes and Waffles,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Griddle_Cakes_and_Waffles" class="pginternal">8-9</a></td></tr>
<tr><td style="text-align: left;">Ham, Baked,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Baked_Ham" class="pginternal">33</a></td></tr>
<tr><td style="text-align: left;">Ham, Scalloped with Eggs,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_37" class="pginternal">37</a></td></tr>
<tr><td style="text-align: left;">Hermits,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Hermits" class="pginternal">20</a></td></tr>
<tr><td style="text-align: left;">Hickory Nut Candy,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Hickory_Nut" class="pginternal">44</a></td></tr>
<tr><td style="text-align: left;">Hollandaise Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Hollandaise" class="pginternal">36</a></td></tr>
<tr><td style="text-align: left;">Honey Drop Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Honey_Drop" class="pginternal">18</a></td></tr>
<tr><td style="text-align: left;">Horse Radish Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#HorseRadish" class="pginternal">36</a></td></tr>
<tr><td style="text-align: left;">Huckleberry or Blueberry Float,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Blueberry_Float" class="pginternal">24</a></td></tr>
<tr><td style="text-align: left;">Huckleberry or Blueberry Muffins,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#berry_Muffins" class="pginternal">7</a></td></tr>
<tr><td style="text-align: left;">Ice Cream,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Frozen_Desserts" class="pginternal">28</a></td></tr>
<tr><td style="text-align: left;">Icings and Fillings,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Icings_and_Fillings" class="pginternal">16-17-18</a></td></tr>
<tr><td style="text-align: left;">Invalid Cookery,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Invalid_Cookery" class="pginternal">45-46</a></td></tr>
<tr><td style="text-align: left;">Jams,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Jams" class="pginternal">48</a></td></tr>
<tr><td style="text-align: left;">Jellies,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Jellies" class="pginternal">49</a></td></tr>
<tr><td style="text-align: left;">Jelly Meringue,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Jelly_Meringue" class="pginternal">17</a></td></tr>
<tr><td style="text-align: left;">Jelly Roll,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Jelly_Roll" class="pginternal">25</a></td></tr>
<tr><td style="text-align: left;">Jelly Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#JELLY_SAUCE" class="pginternal">23</a></td></tr>
<tr><td style="text-align: left;">Kidney Beans with Bacon,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Kidney_Beans" class="pginternal">38</a></td></tr>
<tr><td style="text-align: left;">Kohl-Rabi,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Lima_Beans" class="pginternal">40</a></td></tr>
<tr><td style="text-align: left;">Lady Baltimore Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Lady_Baltimore" class="pginternal">15</a></td></tr>
<tr><td style="text-align: left;">Lamb,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Roast_Lamb" class="pginternal">33</a></td></tr>
<tr><td style="text-align: left;">Lemon Jelly,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Lemon_Jelly" class="pginternal">25</a></td></tr>
<tr><td style="text-align: left;">Lemon Meringue Pie,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Lemon_Meringue" class="pginternal">26</a></td></tr>
<tr><td style="text-align: left;">Lemon or Orange Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Orange_Sauce" class="pginternal">26</a></td></tr>
<tr><td style="text-align: left;">Lemon Sherbet,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Lemon_Sherbet" class="pginternal">28</a></td></tr>
<tr><td style="text-align: left;">Lima Beans,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Lima_Beans" class="pginternal">40</a></td></tr>
<tr><td style="text-align: left;">Liver and Bacon,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Liver" class="pginternal">32</a></td></tr>
<tr><td style="text-align: left;">Lobster Salad,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Lobster_Salad" class="pginternal">42</a></td></tr>
<tr><td style="text-align: left;">Lobsters or Crabs,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_31" class="pginternal">31</a></td></tr>
<tr><td style="text-align: left;">Luncheon Dishes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_38" class="pginternal">38</a></td></tr>
<tr><td style="text-align: left;">Luncheon or Sandwich Rolls,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Sandwich_Rolls" class="pginternal">4</a></td></tr>
<tr><td style="text-align: left;">Macaroni, Baked with Cheese,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Baked_Macaroni" class="pginternal">38</a></td></tr>
<tr><td style="text-align: left;">Maitre D'Hotel Butter,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Maitre_D" class="pginternal">36</a></td></tr>
<tr><td style="text-align: left;">Maple Icing,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Maple_Ice" class="pginternal">17</a></td></tr>
<tr><td style="text-align: left;">Maple Layer Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_15" class="pginternal">15</a></td></tr>
<tr><td style="text-align: left;">Maple Nut Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Maple_Nut" class="pginternal">12</a></td></tr>
<tr><td style="text-align: left;">Maple Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Maple_Sauce" class="pginternal">25</a></td></tr>
<tr><td style="text-align: left;">Marble Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_13" class="pginternal">13</a></td></tr>
<tr><td style="text-align: left;">Marquise Salad,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_42" class="pginternal">42</a></td></tr>
<tr><td style="text-align: left;">Marshmallow Cookies,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Marshmallow_Cookies" class="pginternal">20</a></td></tr>
<tr><td style="text-align: left;">Marshmallow Filling,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Marshmallow_Fill" class="pginternal">17</a></td></tr>
<tr><td style="text-align: left;">Marshmallow Icing,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Devils" class="pginternal">14</a></td></tr>
<tr><td style="text-align: left;">Mayonnaise,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Mayonnaise" class="pginternal">41</a></td></tr>
<tr><td style="text-align: left;">Meats,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Meats" class="pginternal">32-33-34</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Roast_Meats" class="pginternal">45</a></td></tr>
<tr><td style="text-align: left;">Meringues,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Meringues" class="pginternal">23</a></td></tr>
<tr><td style="text-align: left;">Mince Meat,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Mince_Meat" class="pginternal">27</a></td></tr>
<tr><td style="text-align: left;">Mince Pie,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Mince_Pie" class="pginternal">27</a></td></tr>
<tr><td style="text-align: left;">Mint Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Mint_Sauce" class="pginternal">36</a></td></tr>
<tr><td style="text-align: left;">Molasses Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Molasses_Cake" class="pginternal">12</a>-<a href="285609155383144226_38193-h-0.htm.xhtml#Page_19" class="pginternal">19</a></td></tr>
<tr><td style="text-align: left;">Molasses Candy,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Molasses_Candy" class="pginternal">43</a></td></tr>
<tr><td style="text-align: left;">Muffins,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_6" class="pginternal">6-7</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Gluten_Muffins" class="pginternal">46</a></td></tr>
<tr><td style="text-align: left;">Nut and Potato Croquettes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Potato_Croq" class="pginternal">37</a></td></tr>
<tr><td style="text-align: left;">Nut and Raisin Bread,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Nut_and_Raisin_Bread" class="pginternal">3</a></td></tr>
<tr><td style="text-align: left;">Nut and Raisin Rolls,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Nut_and_Raisin_Rolls" class="pginternal">4</a></td></tr>
<tr><td style="text-align: left;">Nut Bars,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Nut_Bars" class="pginternal">20</a></td></tr>
<tr><td style="text-align: left;">Nuts, Creamed,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Creamed_Nuts" class="pginternal">43</a></td></tr>
<tr><td style="text-align: left;">Oatmeal Macaroons,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Oatmeal_Macaroons" class="pginternal">20</a></td></tr>
<tr><td style="text-align: left;">Omelets,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Plain_Omelet" class="pginternal">37</a></td></tr>
<tr><td style="text-align: left;">Onions,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Vegetables" class="pginternal">39</a></td></tr>
<tr><td style="text-align: left;">Onion Soup,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Onion_Soup" class="pginternal">30</a></td></tr>
<tr><td style="text-align: left;">Orange Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Orange_Cakes" class="pginternal">18</a></td></tr>
<tr><td style="text-align: left;">Orange Filling and Icing,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#ORANGE_FILL" class="pginternal">14</a>-<a href="285609155383144226_38193-h-0.htm.xhtml#Orange_Icing" class="pginternal">17</a></td></tr>
<tr><td style="text-align: left;">Orange Layer Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Orange_Layer" class="pginternal">13</a></td></tr>
<tr><td style="text-align: left;">Orange Water Ice,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Orange_Water_Ice" class="pginternal">29</a></td></tr>
<tr><td style="text-align: left;">Oyster Dressing,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Oyster_Dressing" class="pginternal">34</a></td></tr>
<tr><td style="text-align: left;">Oyster Plant,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Oyster_Plant" class="pginternal">40</a></td></tr>
<tr><td style="text-align: left;">Oysters,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Oysters" class="pginternal">31</a></td></tr>
<tr><td style="text-align: left;">Pancakes, French,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#French_Pancakes" class="pginternal">9</a></td></tr>
<tr><td style="text-align: left;">Parker House Rolls,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_5" class="pginternal">5</a></td></tr>
<tr><td style="text-align: left;">Parsnips,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Vegetables" class="pginternal">40</a></td></tr>
<tr><td style="text-align: left;">Pastry and Pies,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Pastry_and_Pies" class="pginternal">26-27-28</a></td></tr>
<tr><td style="text-align: left;">Patty Shells, Royal,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#ROYAL_PATTY" class="pginternal">38</a></td></tr>
<tr><td style="text-align: left;">Peaches,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Peaches" class="pginternal">47</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Pickles" class="pginternal">49</a></td></tr>
<tr><td style="text-align: left;">Peanut Brittle,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Peanut_Brittle" class="pginternal">43</a></td></tr>
<tr><td style="text-align: left;">Peanut Butter Bread,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Peanut_Butter" class="pginternal">4</a></td></tr>
<tr><td style="text-align: left;">Pears,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Pears" class="pginternal">48</a></td></tr>
<tr><td style="text-align: left;">Penuche,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Penuche" class="pginternal">44</a></td></tr>
<tr><td style="text-align: left;">Pickles,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Pickled_Beets" class="pginternal">39</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Pickles" class="pginternal">49</a></td></tr>
<tr><td style="text-align: left;">Pineapple Juice,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Invalid_Cookery" class="pginternal">45</a></td></tr>
<tr><td style="text-align: left;">Planked Fish,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Planked_Fish" class="pginternal">30</a></td></tr>
<tr><td style="text-align: left;">Plums,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Canning_Fruits" class="pginternal">47</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Plum" class="pginternal">49</a></td></tr>
<tr><td style="text-align: left;">Poor Man's Pudding,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Poor_Mans" class="pginternal">22</a></td></tr>
<tr><td style="text-align: left;">Popcorn, Candied,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Popcorn" class="pginternal">43</a></td></tr>
<tr><td style="text-align: left;">Popovers,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Popovers" class="pginternal">8</a></td></tr>
<tr><td style="text-align: left;">Potato and Nut Croquettes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Potato_Croq" class="pginternal">37</a></td></tr>
<tr><td style="text-align: left;">Potato Rolls,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Potato_Rolls" class="pginternal">4</a></td></tr>
<tr><td style="text-align: left;">Potato Salad,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Potato_Salad" class="pginternal">42</a></td></tr>
<tr><td style="text-align: left;">Potatoes, Sweet and White,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Vegetables" class="pginternal">39-40</a></td></tr>
<tr><td style="text-align: left;">Pot Roast of Beef,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Pot_Roast_of_Beef" class="pginternal">33</a></td></tr>
<tr><td style="text-align: left;">Poultry,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Poultry" class="pginternal">34-35</a></td></tr>
<tr><td style="text-align: left;">Poultry Dressing,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Poultry_Dressing" class="pginternal">34-35</a></td></tr>
<tr><td style="text-align: left;">Pound Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Pound_Cake" class="pginternal">11</a></td></tr>
<tr><td style="text-align: left;">Preserving and Canning</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Preserving_and_Canning" class="pginternal">46-49</a></td></tr>
<tr><td style="text-align: left;">Prune or Date Bread,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Date_Bread" class="pginternal">4</a></td></tr>
<tr><td style="text-align: left;">Prune Puff,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Prune_Puff" class="pginternal">25</a></td></tr>
<tr><td style="text-align: left;">Prunes, Stuffed,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Stuffed_dates" class="pginternal">44</a></td></tr>
<tr><td style="text-align: left;">Puddings and Other Desserts,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_22" class="pginternal">22-25</a></td></tr>
<tr><td style="text-align: left;">Pumpkin Pie,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Pumpkin_Pie" class="pginternal">27</a></td></tr>
<tr><td style="text-align: left;">Raisin and Nut Bread,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Nut_and_Raisin_Bread" class="pginternal">3</a></td></tr>
<tr><td style="text-align: left;">Raisin and Nut Rolls,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Nut_and_Raisin_Rolls" class="pginternal">4</a></td></tr>
<tr><td style="text-align: left;">Raisin Drop Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Raisin_Drop" class="pginternal">18</a></td></tr>
<tr><td style="text-align: left;">Raisin Tea Ring,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Raisin_Tea" class="pginternal">6</a></td></tr>
<tr><td style="text-align: left;">Raspberries,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Canning_Fruits" class="pginternal">47-48</a></td></tr>
<tr><td style="text-align: left;">Rhubarb Pie,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Rhubarb_Pie" class="pginternal">27</a></td></tr>
<tr><td style="text-align: left;">Rice Croquettes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Rice_Croq" class="pginternal">37</a></td></tr>
<tr><td style="text-align: left;">Rice Griddle Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Rice_Griddle" class="pginternal">9</a></td></tr>
<tr><td style="text-align: left;">Rice Muffins,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Rice_Muffins" class="pginternal">7</a></td></tr>
<tr><td style="text-align: left;">Rice Pudding,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Rice_Pudding" class="pginternal">22</a></td></tr>
<tr><td style="text-align: left;">Rolls,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Sandwich_Rolls" class="pginternal">4-5</a></td></tr>
<tr><td style="text-align: left;">Roast Meats,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Meats" class="pginternal">32-33</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Roast_Meats" class="pginternal">45</a></td></tr>
<tr><td style="text-align: left;">Rusks,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_5" class="pginternal">5</a></td></tr>
<tr><td style="text-align: left;">Russian Dressing,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Russian" class="pginternal">41</a></td></tr>
<tr><td style="text-align: left;">Rye Rolls,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Rye_Rolls" class="pginternal">4</a></td></tr>
<tr><td style="text-align: left;">Salads and Salad Dressings,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_41" class="pginternal">41-42</a></td></tr>
<tr><td style="text-align: left;">Sally Lunn,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Sally_Lunn" class="pginternal">8</a></td></tr>
<tr><td style="text-align: left;">Salmon Croquettes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Salmon_Croq" class="pginternal">37</a></td></tr>
<tr><td style="text-align: left;">Sandwich Rolls,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Sandwich_Rolls" class="pginternal">4</a></td></tr>
<tr><td style="text-align: left;">Sauces, Fish, Meat and Vegetable,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#sav_Sauces" class="pginternal">35-36</a></td></tr>
<tr><td style="text-align: left;">Sauces, Pudding,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#JELLY_SAUCE" class="pginternal">23</a>-<a href="285609155383144226_38193-h-0.htm.xhtml#Pudding_Sauces" class="pginternal">25-26</a></td></tr>
<tr><td style="text-align: left;">Scones,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Scones" class="pginternal">7</a></td></tr>
<tr><td style="text-align: left;">Sea Foam Icing,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Sea_Foam" class="pginternal">17</a></td></tr>
<tr><td style="text-align: left;">Shell Fish,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_31" class="pginternal">31</a></td></tr>
<tr><td style="text-align: left;">Shortcakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Fruit_Shortcakes" class="pginternal">20-21</a></td></tr>
<tr><td style="text-align: left;">Soups, Cream and from Stock,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Soups" class="pginternal">29-30</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Soupsfl" class="pginternal">45</a></td></tr>
<tr><td style="text-align: left;">Spanish Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Spanish_Cake" class="pginternal">11</a></td></tr>
<tr><td style="text-align: left;">Spanish Cream,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Spanish_Cream" class="pginternal">46</a></td></tr>
<tr><td style="text-align: left;">Spice Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Spice_Cakes" class="pginternal">18</a></td></tr>
<tr><td style="text-align: left;">Spiced Currants,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Spiced_Currants" class="pginternal">49</a></td></tr>
<tr><td style="text-align: left;">Spider Corn Bread,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Spider_Corn" class="pginternal">3</a></td></tr>
<tr><td style="text-align: left;">Spinach,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Vegetables" class="pginternal">39-40</a></td></tr>
<tr><td style="text-align: left;">Sponge Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Sponge_Cake" class="pginternal">15-16</a></td></tr>
<tr><td style="text-align: left;">Stewing and Boiling (Meats),</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Boiling_and_Stewing" class="pginternal">32</a></td></tr>
<tr><td style="text-align: left;">Stew with Dumplings,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Dumplings2" class="pginternal">32</a></td></tr>
<tr><td style="text-align: left;">Strawberry Ice Cream,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Phil_Ice" class="pginternal">28</a></td></tr>
<tr><td style="text-align: left;">Strawberry Icing,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Strawberry_Icing" class="pginternal">17</a></td></tr>
<tr><td style="text-align: left;">Strawberry Mousse,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_29" class="pginternal">29</a></td></tr>
<tr><td style="text-align: left;">Strawberry Pie,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_27" class="pginternal">27</a></td></tr>
<tr><td style="text-align: left;">Strawberry Shortcakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Page_21" class="pginternal">21</a></td></tr>
<tr><td style="text-align: left;">Sunshine Cake,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Sunshine_Cake" class="pginternal">10</a></td></tr>
<tr><td style="text-align: left;">Sweetbreads, Creamed,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Creamed_Sweetbreads" class="pginternal">34</a></td></tr>
<tr><td style="text-align: left;">Taffy, Butter,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Butter_Scotch" class="pginternal">43</a></td></tr>
<tr><td style="text-align: left;">Tapioca Pudding,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Tapioca" class="pginternal">22</a></td></tr>
<tr><td style="text-align: left;">Tea,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Page_43" class="pginternal">43</a></td></tr>
<tr><td style="text-align: left;">Time-Table for Canning Fruits,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Canning_Fruits" class="pginternal">47</a></td></tr>
<tr><td style="text-align: left;">Toast, French,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#French_Toast" class="pginternal">39</a></td></tr>
<tr><td style="text-align: left;">Tomato Catsup,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Catsup" class="pginternal">49</a></td></tr>
<tr><td style="text-align: left;">Tomatoes and Eggs,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Toms_Eggs" class="pginternal">38</a></td></tr>
<tr><td style="text-align: left;">Tomatoes, Baked,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Baked_Tomatoes" class="pginternal">40</a></td></tr>
<tr><td style="text-align: left;">Tomato Pickles,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Tomato_Pickles" class="pginternal">49</a></td></tr>
<tr><td style="text-align: left;">Tomato Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Tomato_Sauce" class="pginternal">35</a></td></tr>
<tr><td style="text-align: left;">Tomato Soup,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Cream_Tomato" class="pginternal">30</a></td></tr>
<tr><td style="text-align: left;">Veal, Baked with Tomato Sauce,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Baked_Veal" class="pginternal">33</a></td></tr>
<tr><td style="text-align: left;">Veal Cutlet,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Veal_Cutlet" class="pginternal">33</a></td></tr>
<tr><td style="text-align: left;">Vegetables,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Vegetables" class="pginternal">38-39-40</a>-<a href="285609155383144226_38193-h-1.htm.xhtml#Boiled_Meats" class="pginternal">45</a></td></tr>
<tr><td style="text-align: left;">Vegetable Salad,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-1.htm.xhtml#Veg_Salad" class="pginternal">41</a></td></tr>
<tr><td style="text-align: left;">Waffles,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Waffles" class="pginternal">9</a></td></tr>
<tr><td style="text-align: left;">Whole Wheat Biscuits,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Wheat_Biscuits" class="pginternal">6</a></td></tr>
<tr><td style="text-align: left;">Whole Wheat Hot Cakes,</td><td style="text-align: right;"><a href="285609155383144226_38193-h-0.htm.xhtml#Wheat_Hot_Cakes" class="pginternal">9</a></td></tr>
</tbody></table>
'''

soup = BeautifulSoup(html, 'html.parser')

data = []
rows = soup.find_all('tr')
for row in rows:
    cols = row.find_all('td')
    if cols:
        text = cols[0].text.strip()
        data.append([text, 'Origin', str(42)])  # Change '42' to your desired value between 1 and 100

# Write data to CSV file
with open('output.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(data)