# views.account.update_password

from flask import (flash, request, )

from app.forms import ChangePassword as UpdatePasswordForm
from app.util import session as session_util
from app.views.generic import AccountFormView


class UpdatePasswordView(AccountFormView):
    """Update a logged in user's password

    """

    def get_template_name(self):
        return 'form2/update_password.html'

    def get_form(self):
        return UpdatePasswordForm()

    def post(self):
        form = UpdatePasswordForm(request.form)

        if form.validate():

            old_pass = form.current_password.data
            new_pass = form.new_password.data
            account = session_util.get_account()

            if account.check_password(old_pass):
                account.set_password(new_pass)
                account.save()
                flash("New password saved", 'success')
            else:
                # flash("That's not your current password.", 'error')
                form.current_password.errors.append(
                    "That's not your current password."
                )

        return self.render_template(form=form)
