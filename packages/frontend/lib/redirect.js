import Router from 'next/router';

export default (context, target) => {
  if (context.res) {
    // server
    // 303: "See Other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // In browser, pretend it never happened
    Router.replace(target);
  }
};
