/**
 * Rang De Fest 2026 — Google Forms Creator
 *
 * HOW TO USE:
 * 1. Open https://script.google.com/
 * 2. Click New project.
 * 3. Replace the editor contents with this entire script.
 * 4. Click Save, then Run > createRangDeFestForm.
 * 5. Approve Google's permission prompt.
 * 6. Open the execution log to get the edit and public form URLs.
 *
 * IMPORTANT:
 * Check WHATSAPP_GROUP_URL below before running. The URL was transcribed
 * from the screenshot and should be tested/replaced with the exact invite URL.
 */

function createRangDeFestForm() {
  const WHATSAPP_GROUP_URL =
    'https://chat.whatsapp.com/EFEHAOCyY0A2VQpgsfmwRW?s=c&lp=a&mlu=4&ilr=4';

  const form = FormApp.create('Rang De Fest 2026 | Official Registration Form');

  form.setDescription(
    'Welcome to Rang De Fest — a vibrant celebration of colours, creativity, shopping, food and community!\n\n' +
    'Join us for an unforgettable festive evening with family and friends.\n\n' +
    'DATE: Saturday, 31 October 2026\n' +
    'TIME: 6:00 PM – 12:00 AM\n' +
    'VENUE: RETAJ Academy, Qasimabad, Hyderabad, Sindh\n' +
    'ENTRY: FREE\n' +
    'DRESS CODE: White outfit with a colourful dupatta or stole (Holi-inspired festive theme)\n\n' +
    'Organized by HYD Pop-Up in collaboration with RETAJ Academy.\n\n' +
    'Please complete this form to register your interest in attending. Make sure your contact number is correct. Future-event updates are optional.\n\n' +
    'We look forward to celebrating with you at Rang De Fest 2026!'
  );

  form.setConfirmationMessage(
    'THANK YOU FOR REGISTERING FOR RANG DE FEST 2026!\n\n' +
    'We are excited to celebrate colours, creativity, food, shopping and community with you!\n\n' +
    'DATE: 31 October 2026\n' +
    'TIME: 6:00 PM – 12:00 AM\n' +
    'VENUE: RETAJ Academy, Qasimabad, Hyderabad\n' +
    'ENTRY: FREE\n\n' +
    'Remember the dress code: white outfit with a colourful dupatta or stole.\n\n' +
    'See you at Rang De Fest!'
  );

  form.setProgressBar(true);
  form.setShuffleQuestions(false);
  form.setAcceptingResponses(true);
  form.setShowLinkToRespondAgain(false);

  // SECTION 1: Attendee registration
  form.addSectionHeaderItem()
    .setTitle('Attendee Registration')
    .setHelpText('Please fill in the details below to register for Rang De Fest 2026. Fields marked with an asterisk are required.');

  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('WhatsApp Contact Number')
    .setHelpText('Enter your active mobile/WhatsApp number, including your country code if possible (e.g., +92 3XX XXXXXXX).')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('How many people are you registering for? (Including yourself)')
    .setChoiceValues([
      '1 person',
      '2 people',
      '3 people',
      '4 people',
      '5 people',
      'More than 5 people'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('How did you hear about Rang De Fest?')
    .setChoiceValues([
      'Instagram',
      'Facebook',
      'WhatsApp',
      'Friends or Family',
      'College / University',
      'Other'
    ])
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('Would you like to receive updates about future HYD Pop-Up events?')
    .setHelpText('Optional. Select the option below if you consent to receive future event updates.')
    .setChoiceValues([
      "Yes, I'd like to receive updates."
    ])
    .setRequired(false);

  // SECTION 2: Community invitation
  form.addPageBreakItem()
    .setTitle("You're Invited to Our Community!")
    .setHelpText(
      'Stay connected with the HYD POP-UP community!\n\n' +
      'Join our WhatsApp group to hear about future pop-ups, creative events, vendor opportunities and community updates.\n\n' +
      'WhatsApp group invitation:\n' + WHATSAPP_GROUP_URL + '\n\n' +
      'If the invitation does not open, contact the event organizers for a fresh link.'
    );

  // Log links so the owner can open the form and edit it.
  Logger.log('FORM EDIT URL: ' + form.getEditUrl());
  Logger.log('PUBLIC REGISTRATION URL: ' + form.getPublishedUrl());
}
