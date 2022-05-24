# Developing

## Issues

When opening a new issue, always make sure to fill out the issue template. **This step is very important!** Not doing so may result in your issue not being managed in a timely fashion. Don't take this personally if this happens, and feel free to open a new issue once you've gathered all the information required by the template.

### Bugs

We use GitHub Issues for our public bugs. If you would like to report a problem, take a look around and see if someone already opened an issue about it. If you are certain this is a new unreported bug, you can submit a bug report using our bug report template.

- **One bug per issue:** Please report a single bug per issue. This make easier to assign and follow the correction.
- **Provide reproduction steps:** List all the steps necessary to reproduce the issue. The person reading your bug report should be able to follow these steps to reproduce your issue with minimal effort.

If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend filing an issue detailing what you're fixing. This is helpful in case we don't accept that specific fix but want to keep track of the issue.

### Security Bugs

To safely disclosure, all security issues must be sent by  the email security-oss@ifood.com.br. This is required to each report be acknowledged, analyzed and classified by the internal iFood security team, and treated and published in the best way. **Please, do not file public issues.**

For more information, read our [security document](https://github.com/ifood/.github/blob/main/SECURITY.md).

### Feature requests

If you would like to request a new feature or enhancement but are not yet thinking about opening a pull request, you can file an issue with the feature request template. 

## Pull Requests

This is the principal way that the community will use to share your code with the project, and needs to be described clearly to help the project team review. 

So, it`s required to follow some best practices that all pull requests, to help newer contributors and standardize, giving minimal important information to the reviewer about the code:

1. **Keep your PR small.** Small pull requests (~300 lines of diff) are much easier to review and more likely to get merged. Make sure the PR does only one thing, otherwise please split it.
2. **Use descriptive titles.** It is recommended to follow this [commit message style](#commit-messages).
3. **Test your changes.** And describe how to test your pull request.
4. **CLA.** If you haven't already, [sign the CLA](https://ifood.github.io/cla/).
5. **Related Issue.** All pull requests must have an issue associated, and specified in the message.

All pull requests should be opened against the `main` branch.

We have a lot of integration systems that run automated tests to guard against mistakes. The maintainers will also review your code and fix obvious issues for you. These systems' duty is to make you worry as little about the chores as possible. Your code contributions are more important than sticking to any procedures, although completing the checklist will surely save everyone's time.

### Commit Messages

All projects follow the conventional commits specification (https://www.conventionalcommits.org/) with some particularities:

- Text in English.
- The first line must have at most 100 characters.
- Sentences are written in the present imperative form.

The related issue must be referenced in the footer (optional for non-permanent branches)

The template will look like this:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Example:

```
fix: Fix code typing error

Details can be found at ticket

Refs #133
```

To help the user conform with the pattern, the project should use commitzen and repository server and local hooks.
