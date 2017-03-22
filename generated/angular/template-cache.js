angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div class=\"container recherche\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 text-center logo\">\n" +
    "            <h1><span class=\"blue\">W</span><span class=\"rouge\">I</span><span class=\"jaune\">I</span><span class=\"blue\">G</span><span class=\"blue\">L</span><span class=\"rouge\">E</span></h1>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 text-center\">\n" +
    "                <input class=\"search-bar\" type=\"text\" name=\"searching\" value=\"\" placeholder=\"Search something...\" ng-model=\"query\">\n" +
    "              <a ui-sref=\"anon.resultat\"><button type=\"button\" class=\"btn btn-default glyphicon glyphicon-search loupe\" aria-hidden=\"true\" ng-click=\"goSearch()\">\n" +
    "                </button></a> \n" +
    "\n" +
    "<div ng-repeat=\"i in gif \" ng-show=\"$first\">\n" +
    "  <img src=\"{{i.images.downsized.url}}\" alt=\"\">\n" +
    "\n" +
    "<!-- </div>\n" +
    "<div ng-repeat=\"i in deezer \">\n" +
    "  <img src=\"{{i.images.downsized.url}}\" alt=\"\">\n" +
    "\n" +
    "</div> -->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "                  <li ui-sref-active=\"active\"><a ui-sref=\"anon.resultat\">resultat</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\">Login</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\">Register</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/resultat.html",
    "<!-- START Barre de recherche  -->\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row barre\">\n" +
    "        <div class=\"col-xs-1 logo text-right\" style=\"border:1px solid red;\">\n" +
    "            <h1>WIIGLE</h1>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-11 text-center\">\n" +
    "            <input class=\"search-bar\" type=\"text\" name=\"searching\" value=\"\" placeholder=\"Search something...\" ng-model=\"query\">\n" +
    "            <button type=\"button\" class=\"btn btn-default glyphicon glyphicon-search loupe\" aria-hidden=\"true\" ng-click=\"goSearch()\">\n" +
    "              </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- END Barre de recherche -->\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row resultat\">\n" +
    "        <!--START col géante lg 8 -->\n" +
    "        <div class=\"col-lg-8\" style=\"border:1px solid red;\">\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "\n" +
    "                <!-- VIDEO -->\n" +
    "\n" +
    "                <div class=\"col-lg-8 video\" style=\"border:1px solid yellow;\">\n" +
    "                    <img class=\"img-responsive border\" src=\"img/chat1.png\" alt=\"\">\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- IMAGE -->\n" +
    "\n" +
    "                <div class=\"col-lg-4 image\" style=\"border:1px solid yellow;\">\n" +
    "                  <img class=\"img-responsive border\" src=\"{{image.value[0].contentUrl}}\" alt=\"\"> </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row ligne2\">\n" +
    "\n" +
    "                <!-- GIF -->\n" +
    "                <div class=\"col-lg-4\" ng-repeat=\"i in gif \" ng-show=\"$first\">\n" +
    "                    <img class=\"img-responsive\" src=\"{{i.images.downsized.url}}\" alt=\"\">\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- FILM -->\n" +
    "                <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 film\" style=\"border:1px solid yellow\">\n" +
    "                    <div class=\"film\">\n" +
    "                        <div ng-if=\"details.Response==='True'\" class=\"ng-binding ng-scope\">\n" +
    "                            <div id=\"results\">\n" +
    "                              <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-12\">\n" +
    "                                <img class=\"img-responsive center-block\" ng-src=\"{{ details.Poster=='N/A' ? 'http://placehold.it/150x220&text=N/A' : details.Poster }}\">\n" +
    "                              </div>\n" +
    "\n" +
    "                              <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-12\">\n" +
    "\n" +
    "                                <h3 class=\"title\"><a href=\"http://imdb.com/title/{{ details.imdbID }}\" target=\"_blank\">{{ details.Title }}</a></h3>\n" +
    "                                <ul class=\"film-details\">\n" +
    "                                    <li><strong>Released on: </strong> {{ details.Released }} ({{ details.Runtime }})</li>\n" +
    "                                    <li><strong>Director: </strong> {{ details.Director }}</li>\n" +
    "                                    <li><strong>Actors: </strong> {{ details.Actors }}</li>\n" +
    "                                    <li><strong>Genre: </strong> {{ details.Genre }}</li>\n" +
    "                                </ul>\n" +
    "                                <p>{{ details.Plot }}</p>\n" +
    "                                <ul class=\"ratings\">\n" +
    "                                    <li><strong>IMDb Rating: </strong> {{ details.imdbRating }}</li>\n" +
    "                                    <li><strong>Rotten Tomatoes: </strong> {{ details.tomatoRating }}</li>\n" +
    "                                </ul>\n" +
    "\n" +
    "\n" +
    "                              </div>\n" +
    "\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- END col géante lg 8 -->\n" +
    "        <div class=\"col-lg-4\" style=\"border: 1px solid red;\">\n" +
    "            <div class=\"row\">\n" +
    "                <!-- COLOR -->\n" +
    "                <div class=\"col-xs-12 border couleur text-center\">\n" +
    "                    <p>Couleur</p>\n" +
    "                </div>\n" +
    "                <!-- WEBSITE -->\n" +
    "                <div class=\"site border col-xs-12 text-center\">\n" +
    "                    <h1>Site</h1>\n" +
    "                </div>\n" +
    "                <!-- MUSIC -->\n" +
    "                <div class=\"col-xs-12 border musique text-center\">\n" +
    "                    <p>musique</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
