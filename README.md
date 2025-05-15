# Zen Components Library

A simple, reusable React component library built with TypeScript. No external UI libraries are used. All components are self-contained and styled with their own CSS files for easy maintenance and reuse.

## Components
- **Button**: Reusable button with primary/secondary variants.
- **Input**: Labeled input for text, email, or password.
- **Card**: Card container for content.
- **Form**: Registration form with validation and avatar upload.
- **Ticket**: Ticket display for successful registration.
- **AvatarUpload**: Drag-and-drop avatar upload box with preview and file size/type validation.

## How to Use the Components
- Import any component you need from the `components` folder.
- Use the component in your React JSX as shown in the demo pages.
- Each component is styled with its own CSS file, so you don't need to worry about global styles.

## How to Run the Demo
1. Install project dependencies using `npm install`.
2. Start the development server with `npm run dev`.
3. Open your browser and go to the local address shown in your terminal (usually http://localhost:5173).
4. The demo will show how to use the components in a real application.
5. To switch between different demo pages, edit the main app file (`src/App.tsx`) to render the desired demo.

## Demo Pages
Demo pages are in `src/demos/`:
- **RegistrationDemo.tsx**: Shows the registration form and, on submit, displays the ticket.
- **TicketDemo.tsx**: Shows a static ticket example.

## Project Structure
```
/components
  AvatarUpload.css
  AvatarUpload.tsx
  Button.css
  Button.tsx
  Card.css
  Card.tsx
  Form.css
  Form.tsx
  Input.tsx
  Ticket.css
  Ticket.tsx
/src/demos
  RegistrationDemo.css
  RegistrationDemo.tsx
  TicketDemo.css
  TicketDemo.tsx
```

## Notes
- All components are under 200 lines each.
- No external UI libraries are used.
- All styles are in separate CSS files for each component.
- Built with TypeScript for type safety.
