<?php
date_default_timezone_set('Europe/Paris');

require 'config.php';
require 'functions.php';

$email = $_GET["email"]
// $creneaux = crenaux_html(CRENEAUX, JOURS);
?>

<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>d</title>
</head>

<body>
	<form action="" method="get">
		<label>
			<pre>
				<?php
				if (!empty(($email)) && $email !== " ") {
					try {
						$ressource = fopen("emails.txt", "a");
						$data = $email . " - " . date("j/n/Y H:i:s") . PHP_EOL;
						fwrite($ressource, $data);
					} catch (\Throwable $th) {
						throw $th;
					}
					echo "Votre email a bien été enregistré ";
				}
				var_dump($_GET)
				?>
			</pre>
			<input type="email" name="email" placeholder="votre@email.com" multiple />
			<input type="submit" value="Envoyer" />

		</label>
	</form>
</body>

</html>