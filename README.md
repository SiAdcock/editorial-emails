# Editorial Emails

**Note, this service is not currently running, although it was successfully used
for numerous A/B tests in Q3 2019/20. It also represents a useful reference
point for understanding the vagaries of HTML emails. See the `Project Status`
section below for more info if you want to resurrect.**

A prototype service to render editorial emails.

The motivation is to create something that is decoupled from the main Frontend
repo so that we can move faster.

For the MVP, the core tecnologies are: React, Node, Typescript.

    $ yarn install // install deps
    $ yarn dev // run locally
    $ yarn [test|tslint|tsc|..] // see package.json scripts for options here

## Project status (end of Q3 2019/2020)

This service is not currently running, although it was successfully used for
numerous A/B tests in Q3 2019/20, as the work was deprioritised at the end of
the quarter.

Documentation for the Q3 OKR, including test results, can be found here:

https://drive.google.com/drive/folders/10042sGUYZDua2eyApkLPOS-qH1dLRQbQ

But the project is still useful!

-   firstly, as a kind of documentation/example for how to do HTML in emails
-   secondly, as a launch point for any future email-related OKR

How to redeploy, etc.

1. re-enable the Teamcity project (dotcom:editorial-emails) VCS trigger
2. deploy to CODE or PROD

(If the Teamcity project has been deleted you'll need to recreate it.)

There are a few code changes that should be prioritised:

1. make the fronts 'generic'

To speed up testing, we hard-coded layouts for fronts. Also, because we wanted
to test a variety of designs/layout options for the same fronts. Really though,
these should be driven by the data model. There is metadata in the fronts model
around which container to use. With this, it will become a lot easier to quickly
add new fronts to the project.

2. Remove unsuccessful variants

We have preserved even badly performing designs as a record of the work, but if
you want to make this project 'real' again, you probably want to delete these.
Our test results for CTO can be found here:

## Deploying

We use continuous delivery so merging to master will automatically deploy.
Behind the scenes (i.e. in TC), we run:

    $ yarn build
    $ yarn upload-artifact

You can run the first locally to troubleshoot.

## Supported Emails & Variants

Variants named B/C/D were active by the end of the A/B testing phase.
Variants named X/Y/Z had been switched off by then.

    Film Today
        Variant B
        Variant Z

    Media Briefing
        Variant B
        Variant C
        Variant Z

    Business Today
        Variant B

    Opinion
        Variant B
        Variant Y
        Variant Z

    Sport AU
        Variant B
        Variant C

## Logs and troubleshooting

There is a healthcheck in Route53 connected to an alarm that should email the
team if the service is unavailable.

The lambda has logs in Cloudwatch Logs.

For additional troubleshooting, it is possible to setup access logs in API
Gateway. See:
https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html.

## Email and CSS limitations

On the CSS side, emails have some significant restrictions, which is it
important to be aware of:

-   almost all styles should be inlined (as style attributes on elements)
-   inline styles do not support pseudo-selectors and media questions, which we
    want to support, so we do these in the head, although <style> in the head is
    not universally supported
-   modern layout approaches (flex/grid) are not supported so stick to tables
-   there are various limitations about where you can use padding

Specifically, for layout:

-   only use tables for layout
-   set width on `table` elements
-   set padding on `td` elements
-   avoid margin (it is unreliable on some older Outlook versions)
-   you can do 'responsive design' by using the 'fluid hybrid' technique (see
    [here](https://www.emailonacid.com/blog/article/email-development/a-fluid-hybrid-design-primer/)).
    Essentially, you use nested tables with `width: 100%` and `max-width: 100px`
    (e.g.). Note, a hack is required for Outlook.

To help stick to these, specific typings have been added to constrain CSS
property use - for example `tableCSS`, which differs from `tdCSS` and so on. See
the `css.ts` file for all available here.

Useful reading:

-   https://www.campaignmonitor.com/css/
-   https://www.emailonacid.com/blog/article/email-development/how-to-code-emails-for-outlook-2016/
-   https://www.emailonacid.com/blog/article/email-development/a-fluid-hybrid-design-primer/
-   https://www.theguardian.com/email/film-today
-   https://github.com/guardian/frontend/blob/master/docs/03-dev-howtos/17-working-with-emails.md#email-rendering

Useful snippets with bug fixes for different email clients:

-   https://litmus.com/community/snippets

## Special fixes

Fix #1 - Lotus Notes 8.5 - missing background-color in the footer section.

To fix the problem with the missing background-color on Lotus Notes 8.5, we had to remove inline CSS style which
was setting a 'background-color' to '#333333' and move this styling to 'bgcolor' attribute.
According to Campaign Monitor CSS support (https://www.campaignmonitor.com/css/color-background/background-color/)
background-color is partially supported on the table, which would normally work correctly. However, in the inline styles we were also
adding styles for 'background-repeat', 'background-position' and 'background-image', and all of the above inline styles are not supported in Lotus Notes 8.5.
Because of that, Lotus Notes 8.5 was stripping out all of the inline styles, including 'background-color', which would normally work fine.

More details on the PR can be found here: https://github.com/guardian/editorial-emails/pull/16
