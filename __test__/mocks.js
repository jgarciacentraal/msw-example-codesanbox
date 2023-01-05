import { setupWorker, rest } from "msw";
const worker = setupWorker(
  rest.post("/login", (req, res, ctx) => {
    const isAuthenticated = true;
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authenticated"
        })
      );
    }
    return res(
      ctx.json({
        firstName: "John"
      })
    );
  })
);
// Register the Service Worker and enable the mocking
worker.start();
