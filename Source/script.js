/**
 *
 * Adds badges to github org repos so that the status of different projects
 * can be seen without having to click on each item.
 */
var repos = $('.repo-list-item');

var badges = {
    "travis": {
        "badge": "https://img.shields.io/travis{repo}.svg",
        "url": "https://travis-ci.org{repo}"
    },
    "coveralls": {
        "badge": "https://coveralls.io/repos/github{repo}/badge.svg?branch=master",
        "url": "https://coveralls.io/github{repo}?branch=master"
    },
    "license": {
        "badge": "https://img.shields.io/github/license{repo}.svg",
        "url": "https://github.com{repo}/blob/master/LICENSE.txt"
    },
    "pypi": {
        "badge": "https://img.shields.io/pypi/dm/{repo_name}.svg",
        "url": "https://pypi.python.org/pypi/{repo_name}/"
    }
};

$.each(repos, function (index, item) {

    var org_link = $('.repo-list-name a', item).attr('href');
    var repo_name = org_link.split("/")[2];

    $('.repo-list-meta', item).append("<br/><br/>");
    for (var badge_key in badges) {
        var url = badges[badge_key]['url'].replace("{repo}", org_link);
        var badge = badges[badge_key]['badge'].replace("{repo}", org_link);

        url = url.replace("{repo_name}", repo_name);
        badge = badge.replace("{repo_name}", repo_name);

        $('.repo-list-meta', item).append(
            '<a href="' + url + '">' +
            '<img src="' + badge + '" height="16px"/>' +
            '</a>');
    }

});
