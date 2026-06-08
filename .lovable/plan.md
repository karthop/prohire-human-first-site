Plain English: the current contact form does not truly send the message from the site. It opens the visitor’s email app with a draft addressed to Chris. That can fail silently if the visitor has no mail app configured. The fix is to restore a real form submission path so the website sends the inquiry reliably.

Plan:

1. Restore server-side contact submission
   - Recreate the contact email handler that receives the form data.
   - Send the inquiry to `cbetz@prohireresources.com`.
   - Do not display the email address publicly on the page.

2. Update the contact page submit behavior
   - Replace the current `mailto:` redirect with a real submit call.
   - Show a clear success message only after the send succeeds.
   - Show a clear failure message if sending fails.
   - Keep the current form layout and copy unless required for the fix.

3. Confirm email configuration before finalizing
   - Check whether the project currently has the required email secret/provider configured.
   - If the required sender credential is missing, stop and request only that missing credential instead of pretending it works.

4. Verify the result
   - Test that the form calls the send path successfully.
   - Confirm there are no remaining `mailto:` submissions on the contact form.

Technical details:
- This changes `src/pages/Contact.tsx` and restores the deleted contact email function/config if needed.
- Recipient stays `cbetz@prohireresources.com`.
- Public page still does not print the email address.
- I will not change unrelated pages or old migration text.