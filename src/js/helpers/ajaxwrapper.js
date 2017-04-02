import AuthActions from '../auth/actions';
import $ from 'jquery';

export default function AjaxWrapper(options){
    return $.ajax($.extend({}, options, {
        error: function (jqXHR, textStatus, errorThrown){
            if(jqXHR.status === 401){
                AuthActions.unauthorize();
            }
            //options.error(jqXHR, textStatus, errorThrown);
        }
    }))
};
